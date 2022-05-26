import request from "@/utlis/request";

const http = {
    async getIndex(page,sales,recommend,news){
        const resp = await request.get('/api/index',{
            params:{
                page,
                sales,
                recommend,
                new:news
            }
        });
        return resp;
    }
}


export default http