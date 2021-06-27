export const exportImages = async ( subirImage ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/df2ahfbvy/image/upload';

    const formData = new FormData();
    formData.append('upload_preset','dd2021');
    formData.append('file', subirImage );

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

}