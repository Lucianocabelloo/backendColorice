import mongoose, {Schema} from "mongoose"

const colorSchema = new Schema({
    colorInput:{
        type: String,
        required: false,
        minLength:2 ,
        maxLength:20 ,
    }
})

const Color = mongoose.model("color", colorSchema)
export default Color