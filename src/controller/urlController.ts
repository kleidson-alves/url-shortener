import { config } from '../config/constants';
import { Request, Response } from 'express';
import shortId from 'shortid';
import  URLModel from '../database/models/url';

class URLController {
    public async shorten(request : Request, response: Response){
        const { originUrl } = request.body;
        const url = await URLModel.findOne({originUrl});
        
        if(url){
            response.json(url);
            return;
        }

        const hash = shortId.generate();
        const shortUrl = `${config.API_URL}/${hash}`;

        const newUrl = URLModel.create({originUrl, shortUrl, hash });
        return response.json(newUrl)
    }

    public async redirect(request: Request, response: Response) {
        const { hash } = request.params;

        const url = await URLModel.findOne({ hash })

        if(url) {
            response.redirect(url.originUrl);
            return; 
        }
    
        response.status(400).json("URL not found")
    }
}

export default URLController;