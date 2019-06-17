export function basicInformation(key){
    const label={
        name:'姓名',
        age:'年龄',
        sex:'性别',
        bothday:'出生年月',
        nativePlace:'籍贯',
        school:'毕业院校',
        subject:'专业',
        education:'学历',
    }
    return label[key]
}