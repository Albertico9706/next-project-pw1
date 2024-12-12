import { Job } from "@prisma/client"

const compareId=(a:Job,b:Job)=>{
    return a.id - b.id
}

const compareDate=(a:Job,b:Job)=>{
    if(!(a.pubDate&&b.pubDate))return Infinity
    return (new Date(a.pubDate).getTime()-new Date(b.pubDate).getTime())
}