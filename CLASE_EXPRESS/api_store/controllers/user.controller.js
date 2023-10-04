const getAll = async(req,res)=>{
    res.json({data:'GET ALL'});
};

const postData = async(req,res)=>{
    
    console.log(req.body);
    res.json({data:'GET POST SAVE DATA'});
};

const filterData = async(req,res)=>{
    console.log(req.params);
    //req.params => parametros dinamicos
    //req.query => parametros por query
    //req.body => parametros por el body
    console.log(req.query);
    res.json({data:req.params});
};


module.exports ={getAll,postData,filterData}