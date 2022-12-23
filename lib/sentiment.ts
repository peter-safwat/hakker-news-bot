export async function sentiment(content: any){

  let r = await fetch('https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyBs7MtcAiwD-INn-sQ9hPmOWeRmlDDhXV0', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "document":{
      "type":"PLAIN_TEXT",
      content
      },
      "encodingType":"UTF8"
    }),
  })
  let data = await r.json()
  // console.log(data)

  if(data?.documentSentiment){
    return (data.documentSentiment.score + 1) * 4
  }
}

// sentiment("this movie was just ok").then(console.log)
