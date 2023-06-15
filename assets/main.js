const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmBA_wu8xGg1OfOkfW13Q0Q&part=snippet%2Cid&order=date&maxResults=10';
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '821c26faeemsh14566d65700395bp177217jsnc8e42d4df304',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function badBunny(url){
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
}

(async () =>{
  try{
    const videos = await badBunny(API)
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,9).join('')}
    `
    content.innerHTML = view
  }catch (error){
    console.log(error);
  }
})()//funcion anonima que llama automaticamente una funcion y hace q se ejecute inmediata y automaticamente