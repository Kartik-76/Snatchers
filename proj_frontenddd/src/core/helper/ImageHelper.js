import React from "react";
import { API } from "../../backend";


const ImageHelper = ({product,}) => {
    const imageurl = product ? `${API}/product/photo/${product._id}` : `https://img.freepik.com/free-photo/isolated-black-t-shirt-model-front-view_125540-1073.jpg`
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
