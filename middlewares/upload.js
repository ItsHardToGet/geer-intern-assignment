//third party middleware used for file uploading is multer
 import multer from "multer";
 const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
 })
 const upload=multer({storage:storage});
 export default upload;


//  if(req.file==undefined)