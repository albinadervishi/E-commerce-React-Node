const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: { type: String,
            required: [true,"This field is required"]
    },
    category: {
        type: String,
        required: [true,"This field is required"]
    },
    image: {
        type: String,
        required: [true,"This field is required"]
    },
    price:{
        type: Number,
        required: [true,"This field is required"]
    },
    currency:{
        type: String,
        required: [true,"This field is required"]
    },
    bestseller:{
        type: Boolean,
        default: 'false'
    },
    featured:{
        type: Boolean,
        default: 'false'
    },
    details:{
        dimentions:{
            width:{
                type: Number
            },
            height:{
                type: Number
            }
        },
        size:{
            type:Number
        },
        description:{
            type: String
        }
    }
},
 { timestamps: true });
module.exports = mongoose.model('Products', ProductsSchema);