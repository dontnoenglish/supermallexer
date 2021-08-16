import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
     //2.设置axios的拦截器
     //2.1请求拦截作用
     instance.interceptors.request.use(config => {
         return config
     },err => {
         
     })
     //2.2响应拦截
     instance.interceptors.response.use(res=>{
        return res.data  //这里面主要使用的只有data对象,返回data对象就可以了
    },err=>{
        console.log(err);
    })
   //3.发送真正的网络请求
    return instance(config)
}

