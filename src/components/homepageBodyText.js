import React from 'react'
import './homepageBodyText.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'
export default function HomepageBodyText () {
  return (
    <div className="homepage-body-text-container">
      <div className="text-section-container">
          <div className="text-heading">About</div>
          <br></br>
          <div className="text">
            A rodent of unusual size. Is it a beaver without a tail? A hairy pig without a snout? 
            No, it’s a capybara, the largest rodent in the world! Standing 2 feet (60 centimeters) 
            tall at the shoulder and built somewhat like a barrel with legs, the “capy” has long, 
            light brown, shaggy hair, a face that looks like a beaver’s, no tail, and slightly 
            webbed feet. Originally thought to be a pig of some sort, we now know that the capybara 
            is a rodent, closely related to cavies and guinea pigs.
            Water pig. Africa has hippos, and the Americas have capybaras! Capys are found east of the 
            Andes on Central and South American riverbanks, beside ponds, and in marshes or wherever 
            standing water is available. Due to its dry skin, a capy requires a swimming hole as 
            part of its lifestyle to stay healthy. Water is a source of life for the capybara, as 
            they eat water plants and grasses and use the water itself to escape from danger. 
            In fact, a capybara can stay underwater for up to five minutes at a time to hide from 
            predators. It uses those webbed feet (four toes on each front foot and three on each back one)
            to swim as well as walk. The capybara has something in common with the hippo: its eyes, 
            ears, and nostrils are all found near the top of the its head. A capybara can lift just 
            those parts out of the water to learn everything it needs to know about its surroundings 
            while the rest of its body remains hidden underwater.Capybaras also wallow in shallow water 
            and mud to keep cool during a hot day before wandering out in the evening to graze. They tend 
            to eat around dawn and dusk, but if capybaras feel threatened, they wait until the safe cover 
            of night to eat.
          </div>
      </div>
      <div className="text-section-container">
        <div className="text-heading">Habitat and Diet</div>
          <br></br>
          <i className="fas fa-box"></i>
          <div className="text">
            Feeling right at home. Capybara live in Central and South America. They roam the swampy, grassy 
            regions bordering rivers, ponds, streams. and lakes. Long in the teeth. Because capybaras are 
            rodents, they share some common features with mice, squirrels, and porcupines. The most well-known 
            of those features are probably those ever-growing front teeth. Capybaras use their long, sharp teeth 
            for grazing on grass and water plants. An adult capy can eat 6 to 8 pounds (2.7 to 3.6 kilograms) of 
            grass per day! During the dry season, when fresh grasses and water plants dry up, capybaras eat reeds, 
            grains, melons, and squashes. They also eat their own poop to get beneficial bacteria to help their 
            stomach break down the thick fiber in their meals. Even though rodents aren’t closely related to 
            ruminants like goats, cows, and giraffes, capybaras regurgitate their food to chew it some more. 
            They chew their food from side to side, like a camel, rather than up and down, like we do. This is 
            a good way to eat tough plant materials. At the San Diego Zoo, the capys are offered low-starch, 
            high-fiber biscuits, assorted veggies and greens, and Bermuda grass hay.
          </div>
        </div>
      <div className="text-section-container">
        <div className="text-heading">Family Life</div>
          <br></br>
          <div className="text">
            Many helpers. Capybaras usually live in small groups of about 10 individuals, made up of a dominant 
            male, one or more females, one or more subordinate males, and several young. During the wet season, 
            as many as 40 capys may be found together. It is helpful to have many sets of eyes watching out for 
            the youngsters, since they can easily fall victim to caimans, ocelots, harpy eagles, and anacondas. 
            Adult capybaras have one main natural predator—the jaguar—but humans hunt them as well.
          </div>
      </div>

      <div className="text-section-container">
        <div className="text-heading">At the zoo</div>
        <br></br>
          <div className="text">
            Relishing rodents. The San Diego Zoo has a group of capybaras that can be seen in the Elephant Odyssey 
            habitat. They have learned to voluntarily walk onto a scale for their monthly weight checks and to sit 
            still for a quick physical evaluation. All this is accomplished with the aid of a powerful motivator: 
            food as positive reinforcement! Our largest female, Rose, enjoys belly rubs, foot massages, and scratches 
            on a daily basis. You can often spot wildlife care specialists feeding the capybara group in the morning. 
            With all this special attention, no wonder 13 babies have been born since the habitat opened in 2009!
            Stop by Elephant Odyssey to see these large and unusual rodents. You may see them swimming in their pool, 
            lounging in the sun, or eating their snacks. But no matter what they’re doing, the water pigs will surely astound you.
          </div>
      </div>
      <div className="text-section-container">
        <div className="text-heading">Conservation</div>
        <br></br>
          <div className="text">
            Prime habitat. The capybara is not currently classified as endangered, although it is threatened by deforestation,
            habitat destruction, and illegal poaching. It was in trouble not too long ago, though, due to hunting. Some people 
            in capybara's natural range have used the rodent as a food source for centuries and may sometimes wear capybara teeth 
            as ornaments. By supporting San Diego Zoo Wildlife Alliance, you are our ally in saving and protecting wildlife worldwide.
          </div>
      </div>
    </div>
  )
}