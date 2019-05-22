module.exports = {
   createPost : async (req,res,next) =>{
      try{
         let list_img_url = [];
         let length = req.files.length|0;
         for(i = 0; i < length; i++){
            list_img_url.push(req.files[i].filename);
         };
         let newClassified = await Classified.create({
            id_user: req.user.data._id,
            title: req.body.title,
            price: req.body.price,
            area : req.body.area,
            content: req.body.content,
            category: req.body.category,
            requirement : req.body.requirement,
            address: req.body.address,
            images : list_img_url,
            time_post: req.body.time_post,
         });

         // //add id classified into table User
         await User.findOneAndUpdate({_id: newClassified.id_user},
                     {$push: {id_classified: newClassified._id}});

         var result = {
            "data": newClassified,
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

   updatePost : async(req, res, next) =>{
      try {
         let objectClassifiedUpdate = await Classified.findById(req.params.id);

         // check user author of post
         if(req.user.data._id != objectClassifiedUpdate.id_user){
            throw new Error('Action denied! You are not author of the post');
         }

         else{
            let list_img_url = [];
            let length = req.files.length|0;
            for(i = 0; i < length; i++){
            list_img_url.push(req.files[i].filename);
            };
            var classifiedUpdate = {
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
            
            await Classified.findOneAndUpdate({_id:req.params.id}, classifiedUpdate);
         }
         var result ={
            "data": classifiedUpdate,
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

   deletePost : async (req, res, next) =>{
      try {
         let objectClassifiedDelete = await Classified.findById(req.params.id);
         //findById(): if not found => error

         // check author of post
         if(req.user.data._id != objectClassifiedDelete.id_user){
            throw new Error('Action denied! You are not author of the post');
         }

         await Classified.findOneAndDelete({_id:req.params.id});

         //delete id_classified in table user
         await User.update(
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

   updateLevelPost: async(req,res) => {
      try{
         let postUpdateLevel = await Classified.findById(req.params.id);
         if(req.user.data._id != postUpdateLevel.id_user){
            throw new Error("Action denied! You are not author of the post");
         }

         // if(postUpdateLevel.status == 0){
         //    throw new Error("Post is pendding! Can't upgrade level");
         // }

         await Classified.findOneAndUpdate(
            { _id: req.params.id },
            { level: req.body.level }
         );
         var result = {
            "status": true,
            "message": "Update level successfully!"
         }
      }
      catch(error){
         var result ={
            "status": false,
            "message": "Update false",
            "error_msg": error.message
         }
      }
      res.json(result);
   }
};