module.exports = {
   createPost : async (req,res,next) =>{
      try{
         // list_img_url = [];
         // let length = req.files.length;
         // for(i = 0; i < length; i++){
         //    list_img_url.push(req.files[i].filename);
         // };
         let newClassified = await Classified.create({
            //id_user: req.data._id
            title: req.body.title,
            price: req.body.price,
            area : req.body.area,
            content: req.body.content,
            category: req.body.category,
            requirement : req.body.requirement,
            address: req.body.address,
            // images : list_img_url,
            time_post: req.body.time_post,
         });
         var result = {
            "data": newClassified,
            "status": "Created successfully"
         };
      }
      catch(error){
         var result = {
            "status": "Create failed",
            "error_msg": error.message
         };
      };
      //req.data
      res.json(result);
   },

   updatePost : async(req, res, next) =>{
      try {
         // let length = req.files.length;
         // let list_img_url = [];
         // for (i < 0; i <length; i++){
         //    list_img_url.push(req.files[i].filename);
         // };
         let classifiedUpdate = {
            title: req.body.title,
            price: req.body.price,
            area : req.body.area,
            content: req.body.content,
            category: req.body.category,
            requirement : req.body.requirement,
            address: req.body.address,
            // images : list_img_url,
            time_post: req.body.time_post,
         }

         let objectClassifiedUpdate = await Classified.findById(req.params.id);
         //hình chưa xử lý
         
         // // check user author of post
         // if(req.data._id == objectClassifiedUpdate){
         //    await Classified.findOneAndUpdate({_id:req.params.id}, classifiedUpdate);
         // }else{
         //    throw new Error('Action denied! You are not author of post');
         // }

         await Classified.findOneAndUpdate({_id:req.params.id}, classifiedUpdate);
         var result ={
            //"data": classifiedUpdate,
            "id": objectClassifiedUpdate,
            "status": "Updated successfully"
         };
      } catch (error) { 
         var result = {
            "status": "Update failed",
            "error_msg": error.message
         }
      }
      res.json(result);
   },

   deletePost : async (req, res, next) =>{
      try {
         await Classified.findOneAndDelete({_id:req.params.id});
         var result = {
            "status": "Deleted successfully"
         }
      } catch (error) {
         var result = {
            "status": "Delete failed",
            "error_msg": error.message
         }
      }
      res.json(result);
   }
};