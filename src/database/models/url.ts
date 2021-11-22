import { prop, Typegoose } from "@hasezoey/typegoose";

class URL extends Typegoose {
    @prop()
    hash: string

    @prop()
    originUrl: string

    @prop()
    shortUrl: string
}

const URLModel = new URL().getModelForClass(URL);

export default URLModel;