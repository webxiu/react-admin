export default {
    formateDate(time){
        if(!time) return '';
        let date = new Date(time)
        return date.getFullYear()+'-'+
            (date.getMonth() + 1)+'-'+
            date.getDay()+' '+
            date.getHours()+':'+
            date.getMinutes()+':'+
            date.getSeconds();
    },
    pagination(data,callback){
        return {
            onChange: (current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.page_size,
            total: data.total,
            showTotal:()=>{
                return `共${data.result.total}条`
            },
            showQuickJumper: true
        }
    }
}