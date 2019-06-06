const unit_price = [0,10000,20000,30000];
function calculateBalance(current_balance,time_post, level_post = 1){
   let account_blance = current_balance - time_post * unit_price[level_post];
   return account_blance;
};

module.exports = {
   createPost : async (req,res) =>{
      try{
         let list_img_url = [];
         let length = req.files.length|0;
         for(i = 0; i < length; i++){
            list_img_url.push(req.files[i].filename);
         };
         
         let newClassified = {
            id_user: req.user.data._id,
            title: req.body.title,
            price: req.body.price,
            area : req.body.area,
            level: req.body.level,
            content: req.body.content,
            category: req.body.category,
            requirement : req.body.requirement,
            address: req.body.address,
            images : list_img_url,
            time_post: req.body.time_post,
         };

         let user_create = await User.findById(newClassified.id_user);
         let account_balance = calculateBalance(user_create.amount, newClassified.time_post, newClassified.level);
         if(account_balance < 0){
            throw new Error("Your account balance not enough! Please pay into your account or reduce post time");
         }

         let newClassiiedCreated = await Classified.create(newClassified);
         //add id classified into table User
         await User.findOneAndUpdate({_id: newClassified.id_user},
                     {$push: {id_classified: newClassiiedCreated._id}});

         var result = {
            "data": newClassiiedCreated,
            "message": "Create successfully",
            "status": true
         };
      }
      catch(error){
         var result = {
            "status": false,
            "message": "Create failed",
            "error_msg": error.message
         };
      };
      res.json(result);
   },

   updatePost : async(req, res) =>{
      try {
         let objectClassifiedUpdate = await Classified.findById(req.params.id);

         // check user author of post
         if(req.user.data._id != objectClassifiedUpdate.id_user){
            throw new Error('Action denied! You are not author of the post');
         }

         let list_img_url = [];
         let length = req.files.length|0;
         for(i = 0; i < length; i++){
         list_img_url.push(req.files[i].filename);
         };
         var classifiedUpdate = {
            status: 0,
            level: req.body.level,
            title: req.body.title,
            price: req.body.price,
            area : req.body.area,
            content: req.body.content,
            category: req.body.category,
            requirement : req.body.requirement,
            address: req.body.address,
            images : list_img_url,
            time_post: req.body.time_post,
            last_modified: Date.now()
         };

         let user_update = await User.findById(objectClassifiedUpdate.id_user).select("amount transaction");
         let amount_before_update = current_balance = user_update.amount;

         if(objectClassifiedUpdate.status == 1){
            let one_day = 24*60*60*1000;
            let diff_days = Math.round((Date.now() - objectClassifiedUpdate.time_approved)/one_day);
            var account_balance = unit_price[objectClassifiedUpdate.level] * (objectClassifiedUpdate.time_post - diff_days - 1);
            current_balance += account_balance;

            let account_balance_available = calculateBalance(current_balance,classifiedUpdate.time_post, classifiedUpdate.level);
            if(account_balance_available < 0){
               throw new Error("Your account balance not enough! Please pay into your account or reduce post time or reduce level");
            };

            await Classified.findOneAndUpdate({_id:req.params.id}, classifiedUpdate);

            let transaction = {
               transaction_amount: account_balance,
               transaction_content: "Refund the transaction amount"
            }
            await User.findOneAndUpdate(
               { _id: objectClassifiedUpdate.id_user },
               { amount: current_balance, $push: {transaction: transaction}},
            );
         }

         else{
            let account_balance = calculateBalance(amount_before_update,classifiedUpdate.time_post, classifiedUpdate.level);
            if(account_balance < 0){
               throw new Error("Your account balance not enough! Please pay into your account or reduce post time");
            };
            
            await Classified.findOneAndUpdate({_id:req.params.id}, classifiedUpdate);
         }
         var result ={
            "amount_before_update": amount_before_update,
            "amount_after_update": current_balance,
            "data_update": classifiedUpdate,
            "status": true,
            "message": "Updated successfully"
         };
      } catch (error) { 
         var result = {
            "status": false,
            "message": "Update failed",
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   deletePost : async (req, res) =>{
      try {
         let objectClassifiedDelete = await Classified.findById(req.params.id);

         // check author of post
         if(req.user.data._id != objectClassifiedDelete.id_user){
            throw new Error('Action denied! You are not author of the post');
         }

         await Classified.findOneAndDelete({_id:req.params.id});

         //delete id_classified in table user
         await User.findOneAndUpdate(
            { _id:req.user.data._id },
            { $pull: {id_classified: req.params.id }
         });

         var result = {
            "status": true,
            "message": "Deleted successfully"
         }
      } catch (error) {
         var result = {
            "status": false,
            "message": "Delete failed",
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   aprrovePost: async (req,res) =>{
      try {
         let classified_approved = await Classified.findOneAndUpdate(
            { _id: req.params.id },
            { status: 1, time_approved: Date.now() }
         );
         let transaction_value = 0 - classified_approved.time_post * unit_price[classified_approved.level];
         let transaction = {
            transaction_amount: transaction_value,
            transaction_content: "Pay for post",
         }
         let user = await User.findOne({_id: classified_approved.id_user});
         await User.findOneAndUpdate(
            {_id: classified_approved.id_user},
            { $push: {transaction: transaction}, amount: user.amount + transaction_value }
         );

         var result = {
            "transaction_info" : transaction,
            "status": true,
            "message": "Post is approved!"
         }
      } catch (error) {
         var result = {
            "status": false,
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   showListPostAprroved: async (req,res) =>{
      try {
         let listPostApproved = null;
         const search = req.query.search;
         if(search){
            let regexPattern = new RegExp(".*"+ search +".*", "i");
            listPostApproved = await Classified.find({
               $or: [
                  'title', 'content'
               ].map(key => ({
                  [key]: {
                     $regex: regexPattern
                  }
               }))  
            }).limit(8).populate('id_user');
         }
         else{
            listPostApproved = await Classified.find({status: 1}).populate('id_user').sort({time_approved: -1});
         }
         var result= {
            "status": true,
            "data": listPostApproved
         }
      } catch (error) {
         var result = {
            "status": false,
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   showListPostPending: async (req,res) =>{
      try {
         let listPostPending = await Classified.find({status: 0}).sort({_id: 1});
         var result= {
            "status": true,
            "data": listPostPending
         }
      } catch (error) {
         var result = {
            "status": false,
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   savePost: async(req, res) => {
      try {
         await User.findOneAndUpdate(
            { _id: req.user.data._id},
            { $push: {save_list: req.params.id}}
         );
         var result = {
            "status": true,
            "message": "Saved post"
         }
      } catch (error) {
         var result = {
            "status": false,
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   showPostDetails: async (req, res) => {
      try {
         let postDetails = await Classified.findById({ _id: req.params.id }).populate('id_user');
         var result= {
            "data" : postDetails,
            "status": true
         }
      } catch (error) {
         var result = {
            "status": false,
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   showPostApproved: async(req, res)=>{
      try {
         let pageNumber = parseInt(req.query.page) || 1;
         let numberOfItems = 8;
         let begin = (pageNumber - 1) * numberOfItems;
         let listPost = await Classified.find({status: 1})
                              .sort({_id:-1}).limit(numberOfItems).skip(begin);
         var result = {
            "status": true,
            "data": listPost
         }
      } catch (error) {
         var result = {
            "status": false,
            "err.msg": error.message
         }
      }
      res.json(result);
   }
};