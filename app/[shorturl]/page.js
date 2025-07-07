import clientPromise from "@/ib/mongodb"
import { redirect } from "next/navigation"


export default async function Page({ params }) {
  const shorturl = (await params).shorturl

  const client = await clientPromise
        const db = client.db("bitlink")
        const collection = db.collection("url")

        const doc = await collection.findOne({shorturl: shorturl})
        if(doc){
             redirect(doc.url)
        }else{
            redirect(`${process.env.NEXT_PUBLIC_HOST}`)
        }


  return <div>My Post: {url}</div>
}