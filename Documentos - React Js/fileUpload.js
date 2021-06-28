
const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
}

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if ( file ) {
        dispatch( startUploading( file ) );
    }
}

<input 
    id="fileSelector"
    type="file"
    name="file"
    style={{ display: 'none' }}
    onChange={ handleFileChange }
/>

<button 
    className="btn"
    onClick={ handlePictureClick }
>
    Picture
</button>


export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }


    // return url de la imagen
}


