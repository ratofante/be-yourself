


const Portraits = () => {
   console.log('portrait trigger')
   const template = `
      <div class="portrait">
				<img src="./assets/portrait-1.jpg" alt="" />
			</div>
			<div class="portrait">
				<img src="./assets/portrait-2.jpg" alt="" />
			</div>
			<div class="portrait">
				<img src="./assets/portrait-3.jpg" alt="" />
		</div>
   `
   return template;
}

export default Portraits;