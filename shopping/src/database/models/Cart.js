const moongose = require('mongoose');
const Schema = moongose.Schema;
const CartSchema = new Schema({
    customerId : {type:String},
    items:[
        {
            product:{
                _id:{type: String,require:true},
                name:{type:String},
                desc:{type:String},
                banner:{type:String},
                type:{type:String},
                unit:{type:Number},
                price:{type:Number},
                suplier:{type:String}
            },
            unit:{type:Number,require:true}
        }
    ]
},
{
    toJSON:{
        transform(doc,ret){
            delete ret.__v;
        }
    },
    timestamps:true
});

module.exports = moongose.model('cart',CartSchema);