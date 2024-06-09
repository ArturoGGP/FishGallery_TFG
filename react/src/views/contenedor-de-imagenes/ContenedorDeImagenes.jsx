import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import LazyLoad from "react-lazy-load";

function ContenedorDeImagenes() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => {
                        if (!prev.includes(url)) {
                            return [...prev, url];
                        }
                        return prev;
                    });
                });
            });
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <input
                        type="file"
                        className="form-control"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={uploadFile}>
                        Subir
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <LazyLoad offset={100}>
                    <div>
                        {imageUrls.map((url, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <img
                                    src={url}
                                    className="img-fluid"
                                    alt={`Image ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </LazyLoad>
            </div>
        </div>
    );
}

export default ContenedorDeImagenes;
