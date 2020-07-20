function fetchSavedMixes () {
  console.log(url)
  fetch(`${url}/mixes`)
  .then(r => r.json())
  .then(mixes => {

    renderSavedMixes(mixes)
    
  })

}

function renderSavedMixes (mixes) {

  let mix_list = document.getElementById('mixesLi')

  mixes.forEach(mix => {

    // create li set attributes
    const li = document.createElement('li')
    // li.className
    li.dataset.mixId = mix.id

    li.dataset.userId = mix.user_id
    // li.textContent = mix.mix_name

    li.innerHTML=`
    <br>
      ${mix.mix_name}
      <button class="play-saved-mix">Play</button>
      `

    mix_list.append(li)

  })
  addListenerToMixList()
}



function addListenerToMixList () {
  const mix_list = document.getElementById('mixesLi')
  
  console.log('url', url)
  mix_list.addEventListener('click', (e) => {

    if (e.target.className === "play-saved-mix") {

      console.log("clicked play")
      let mix_id = e.target.parentNode.dataset.mixId

      fetch(`${url}/mixes/${mix_id}`)
      .then(r => r.json())
      .then(mix => playMix(mix))
    }
  })
}

function playMix (mix) {
  birdVolume(mix)
  lightRainVolume(mix)
  heavyRainVolume(mix)
  largeFireVolume(mix)
  campFireVolume(mix)
  forestVolume(mix)
  riverVolume(mix)
  strongWindVolume(mix)
  lightWindVolume(mix)
  thunderVolume(mix)
  waveVolume(mix)
  coffeeShopVolume(mix)
  catPurVolume(mix)
  windChimeVolume(mix)
  nightSoundVolume(mix)
}

function birdVolume (mix) {

  let audio_container = document.querySelector('[data-audio-key="bird_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.bird_volume
  sliderMovesVolume()
  soundTag.play()
}

function lightRainVolume (mix) {

  let audio_container = document.querySelector('[data-audio-key="light_rain_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.light_rain_volume
  sliderMovesVolume()
  soundTag.play()
}


function heavyRainVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="heavy_rain_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.heavy_rain_volume
  sliderMovesVolume()
  soundTag.play()
}


function largeFireVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="large_fire_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.large_fire_volume
  sliderMovesVolume()
  soundTag.play()
}

function campFireVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="campfire_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.campfire_volume
  sliderMovesVolume()
  soundTag.play()
}


function forestVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="forest_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.forest_volume
  sliderMovesVolume()
  soundTag.play()
}


function riverVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="river_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.river_volume
  sliderMovesVolume()
  soundTag.play()
}


function strongWindVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="strong_wind_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.strong_wind_volume
  sliderMovesVolume()
  soundTag.play()
}


function lightWindVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="light_wind_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.light_wind_volume
  sliderMovesVolume()
  soundTag.play()
}


function thunderVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="thunder_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.thunder_volume
  sliderMovesVolume()
  soundTag.play()
}


function waveVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="wave_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.wave_volume
  sliderMovesVolume()
  soundTag.play()
}


function coffeeShopVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="coffee_shop_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.coffee_shop_volume
  sliderMovesVolume()
  soundTag.play()
}
function catPurVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="cat_purring_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.cat_purring_volume
  sliderMovesVolume()
  soundTag.play()
}
function windChimeVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="wind_chime_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.wind_chime_volume
  sliderMovesVolume()
  soundTag.play()
}
function nightSoundVolume(mix) {

  let audio_container = document.querySelector('[data-audio-key="night_sound_volume"]')
  
  let sliderTag = audio_container.children[0].children[2]
  let soundTag = audio_container.children[0].children[1]

  sliderTag.value = mix.night_sound_volume
  sliderMovesVolume()
  soundTag.play()
}

// t.float "light_rain_volume", default: 0.0
    // t.float "heavy_rain_volume", default: 0.0
    // t.float "large_fire_volume", default: 0.0
    // t.float "campfire_volume", default: 0.0
    // t.float "forest_volume", default: 0.0
    // t.float "river_volume", default: 0.0
    // t.float "strong_wind_volume", default: 0.0
    // t.float "light_wind_volume", default: 0.0
    // t.float "thunder_volume", default: 0.0
    // t.float "wave_volume", default: 0.0
    // t.float "coffee_shop_volume", default: 0.0
    // t.float "bird_volume", default: 0.0
