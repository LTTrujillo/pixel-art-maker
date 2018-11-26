document.addEventListener('DOMContentLoaded', () => {

    
  var h1 = document.createElement('H1')
  var title = document.createTextNode("Pixel Art Maker")
  h1.appendChild(title)

  var canvas = document.createElement('DIV')
  canvas.classList.add("canvas")

  for(var i = 0; i < 20; i++){
    var row = document.createElement("DIV")
    row.classList.add('row')
    
    for(var j = 0; j < 20; j++){
      var pixel = document.createElement('DIV')
      pixel.classList.add("pixel")
      
      row.appendChild(pixel)
    }
    canvas.appendChild(row)
  }

  document.body.appendChild(h1)
  document.body.appendChild(canvas)
  
  var colorArr = ['red','blue', 'orange', 'yellow', 'green', 'indigo', 'violet']
  for(var i = 0; i < colorArr.length; i++){
    var color = document.createElement('DIV')
    color.classList.add(colorArr[i])
    color.classList.add('pallete')
    color.setAttribute('style', `background-color: ${colorArr[i]}`)
    document.body.appendChild(color)
  }

  var getColors = document.getElementsByClassName('pallete')
  var backgroundColor = 'white'

  for(var i = 0; i < getColors.length; i++){ 
    getColors[i].addEventListener('click', function(event){ 
      backgroundColor = event.target.style.backgroundColor  
    })   
  }

  var putColor = document.getElementsByClassName('pixel')
  
  for(var i = 0; i < putColor.length; i++){
    putColor[i].addEventListener('click', function(event){
      event.target.style.backgroundColor = backgroundColor
      backgroundColor = 'white'
    }) 
  }
})  