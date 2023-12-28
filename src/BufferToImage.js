function bufferToImage(posterId){
    const uint8Array = new Uint8Array(posterId.data.data);
      const imageBlob = new Blob([uint8Array], { type:  posterId.contentType});
      const url = URL.createObjectURL(imageBlob);
      return url
}
module.exports=bufferToImage;