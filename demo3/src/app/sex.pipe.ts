import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sex', //管道
})
export class SexPipe implements PipeTransform{

    //转换函数必须是transform()
    transform(val:number,language:string):string{ //比如val接收的是emp.sex；language接收的是'zh'
        if(language==='en'){
            if(val==1){
                return 'male';
            }else if(val==2){
                return 'female';
            }else{
                return 'other';
            }
        }
        else if(language==='zh'){
            if(val==1){
                return '男';
            }else if(val==2){
                return '女';
            }else{
                return '未知';
            }
        }
        return '';
    }

}