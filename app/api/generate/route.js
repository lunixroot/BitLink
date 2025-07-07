import clientPromise from "@/ib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()
        const client = await clientPromise
        const db = client.db("bitlink")
        const collection = db.collection("url")


        const doc = await collection.findOne({shorturl: body.shorturl})
        if(doc){
             return Response.json({
            success: false,
            error: true,
            message: 'URL already exists try another url name '
        })
        }


        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({
            success: true, 
            error: false, 
            message: 'URL generated successfully',
            id: result.insertedId
        })
    } catch (error) {
        console.error('Database error:', error)
        return Response.json({
            success: false,
            error: true,
            message: 'Failed to generate URL: ' + error.message
        }, { status: 500 })
    }
}