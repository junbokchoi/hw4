async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()
  // writes the returned JSON to the console
  console.log(json)
  let rides = json
  // 🔥 start here: write code to loop through the rides
        for(let i = 0; i < rides.length; i++){
          let ride = rides[i]
            for(let d = 0; d < ride.length; d++){
              if (ride.length > 1) {
                levelOfService = 'Noober Pool'
              } else if (ride[0].purpleRequested) {
                levelOfService = 'Noober Purple'
              } else if (ride[0].numberOfPassengers > 3) {
                levelOfService = 'Noober XL'
              } else {
                levelOfService = 'Noober X'
              } 
             console.log(ride)

            if (ride.length <= 1){
            let outputs = document.querySelector('.rides')
            outputs.insertAdjacentHTML('beforeend',`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  <i class="fas fa-car-side"></i>
                  <span>${levelOfService}</span>
                </h1>
            
                <div class="border-4 border-gray-900 p-4 my-4 text-left">
                  <div class="flex">
                    <div class="w-1/2">
                      <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
                      <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
                    </div>
                    <div class="w-1/2 text-right">
                      <span class="rounded-xl bg-gray-600 text-white p-2">
                      ${ride[0].numberOfPassengers} passengers
                      </span>
                    </div>
                  </div>
                  <div class="mt-4 flex">
                    <div class="w-1/2">
                      <div class="text-sm font-bold text-gray-600">PICKUP</div>
                      <p>${ride[0].pickupLocation.address}</p>
                      <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
                    </div>
                    <div class="w-1/2">
                      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                      <p>${ride[0].dropoffLocation.address}</p>
                      <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
                    </div>
                  </div>
                </div>`) }
                else if (ride.length <= 2) {
                  let outputs = document.querySelector('.rides')
                  outputs.insertAdjacentHTML('beforeend',`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  <i class="fas fa-car-side"></i>
                  <span>${levelOfService}</span>
                </h1>
            
                <div class="border-4 border-gray-900 p-4 my-4 text-left">
                  <div class="flex">
                    <div class="w-1/2">
                      <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
                      <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
                    </div>
                    <div class="w-1/2 text-right">
                      <span class="rounded-xl bg-gray-600 text-white p-2">
                      ${ride[0].numberOfPassengers} passengers
                      </span>
                    </div>
                  </div>
                  <div class="mt-4 flex">
                    <div class="w-1/2">
                      <div class="text-sm font-bold text-gray-600">PICKUP</div>
                      <p>${ride[0].pickupLocation.address}</p>
                      <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
                    </div>
                    <div class="w-1/2">
                      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                      <p>${ride[0].dropoffLocation.address}</p>
                      <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
                    </div>
                  </div>
                </div>
                 
                <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}</h2>
                    <p class="font-bold text-gray-600">${ride[1].passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${ride[1].numberOfPassengers} passengers
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${ride[1].pickupLocation.address}</p>
                    <p>${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${ride[1].dropoffLocation.address}</p>
                    <p>${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>`) }
              else if (ride.length <= 3) {
                let outputs = document.querySelector('.rides')
                outputs.insertAdjacentHTML('beforeend',`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                <i class="fas fa-car-side"></i>
                <span>${levelOfService}</span>
              </h1>
          
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
                    <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${ride[0].numberOfPassengers} passengers
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${ride[0].pickupLocation.address}</p>
                    <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${ride[0].dropoffLocation.address}</p>
                    <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>
               
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}</h2>
                  <p class="font-bold text-gray-600">${ride[1].passengerDetails.phoneNumber}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${ride[1].numberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${ride[1].pickupLocation.address}</p>
                  <p>${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${ride[1].dropoffLocation.address}</p>
                  <p>${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}</p>
                </div>
              </div>
            </div>
                     
            <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}</h2>
                <p class="font-bold text-gray-600">${ride[2].passengerDetails.phoneNumber}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${ride[2].numberOfPassengers} passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${ride[2].pickupLocation.address}</p>
                <p>${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${ride[2].dropoffLocation.address}</p>
                <p>${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}</p>
              </div>
            </div>
          </div>`) 
            }
              
          }
        }


}

window.addEventListener('DOMContentLoaded', pageLoaded)

