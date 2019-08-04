


module.exports =  {
  forex  :  async function    (req ,  res){


    //method to us inserver  
    // http://localhost:1337/forex?params="diuvyajeet%20singh"
        let  data  =  await   req.query.params
        // final  =  JSON.stringify(data)
        // console.log(data  , "data ")

        return   res.send(data)
    }
}