"use client";
import { useState } from 'react'

export default function Questionarrie() {

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false);

  const questions = [
      {
        "question": "How many people live in your household?",
        "answers": [
          "1 person",
          "2 people", 
          "3 people",
          "4 people",
          "5 or more people"
        ]
      },
      {
        "question": "Size of the House", 
        "answers": [
          "Big House",
          "Medium Sized House",
          "Small House",
          "Apartment"
        ]
      },
      {
        "question": "Food Choices",
        "answers": [
          "A Meal Consisting of Domestic Meats Everyday",
          "Vegetarian meals",
          "Vegan meals",
          "Mostly prepackaged food",
          "A balance between prepackaged and fresh food",
          "All fresh food"  
        ]
      },
      {
        "question": "Water Consumption",
        "answers": [
          "Dishwasher or washing machine use – 9 times a week or more",
          "Dishwasher or washing machine use – 4-9 times a week",
          "Dishwasher or washing machine use – 1-3 times a week meals",
          "No dishwasher",
          "Both dishwasher and washing machine (calculate the above x2)"
        ]
      },
      {
        "question": "Household Purchases",
        "answers": [
          "More than 7 electronics or furniture purchases per year",
          "Between 5-7",
          "Between 3-5",
          "Less than 3",
          "Only second hand purchases"
        ]
      },
      {
        "question": "Waste",
          "answers": [
            "Waste filling 4 garbage cans per week",
            "Waste filling 3 garbage cans per week",
            "Waste filling 2 garbage cans per week",
            "Waste filling 1 garbage can per week",
            "Waste filling half a garbage can or less per week"
          ]
        },
        {
          "question": "Waste Recycling",
        "answers": [
          "No recycling",
          "Glass recycling",
          "Plastic recycling",
          "Paper recycling",
          "Aluminum recycling",
          "Steel recycling",
          "Food recycling"
        ]
      },
      {
        "question": "Transport (Personal Vehicle)",
        "answers": [
          "15,000 miles per year",
          "10,000 – 15,000 miles per year",
          "1,000 – 10,000 miles per year",
          "Less than 1,000 miles per year",
          "No vehicle"
        ]
      },
      {
        "question": "Transport (Public Transport)",
        "answers": [
          "20,000 miles per year",
          "15,000 – 20,000 miles per year", 
          "10,000 – 15,000 miles per year",
          "1,000 – 10,000 miles per year",
          "Less than 1,000 miles",
          "No public transportation"  
        ]
      }
    ]

    
      return (
        <div>
          {!submitted? (<div className="bg-black text-white font-inter">
          <form>
            {questions.map(question => (
              <div key={question.question}>
                <p>{question.question}</p>
                <div>
                  {question.answers.map(answer => (
                    <div key={answer}>
                      <input 
                        type="radio"
                        name={question.question}
                        value={answer}
                        onChange={e => {
                          setAnswers({...answers, [question.question]: e.target.value})
                          console.log(answers)
                        }}
                      />
                      <label>{answer}</label>
                    </div>
                  ))}
                </div>
                <div className='min-h-2 w-screen'>&nbsp;</div>
              </div>
            
            ))}
    
            <button className="bg-green-500 p-2 rounded" onClick={() => {setSubmitted(true)}}>Submit</button>
          </form>
        </div>):
        (<div className='p-8 w-screen h-screen bg-black text-white'>Here is what you can do: Since this person lives alone in a large house, there are opportunities to reduce energy use. Ensure all lighting, appliances, electronics, and HVAC systems are ENERGY STAR certified and upgraded to be as efficient as possible. Adjust the thermostat to reduce heating and AC usage and ensure proper insulation. Unplug devices when not in use to avoid phantom load. Consider installing solar panels to generate renewable electricity.

          As a vegetarian who only cooks 1-3 times per week, this person is already reducing emissions from food production. To further reduce, eliminate any food waste by planning meals wisely, storing leftovers properly, and composting scraps. Grow some food at home if possible. Continue purchasing local and seasonal produce.
          
          Reducing water use will also cut emissions from pumping and heating. Take 5 minute or less showers. Wash full loads of laundry and dishes only. Install low-flow faucets and showerheads. Fix any leaks. Collect rainwater for irrigation.
          
          Since this person purchases used items, manufacturing emissions are avoided. Keep practicing reuse by purchasing secondhand when possible. Recycling all paper, plastic, glass and metal waste is critical since none is currently being recycled. Compost food scraps if available in the area.
          
          For transportation, reduce personal vehicle trips by consolidating errands, carpooling, walking or biking short distances, and taking public transportation as much as feasible. When driving is necessary, make sure the vehicle is properly maintained for maximum fuel efficiency.
          
          Consider switching home electricity to a renewable energy provider to further reduce emissions related to power generation. Advocate for renewable energy policies in the community. Plant native trees on the property - they absorb CO2 as they grow.
          
          Making these changes across energy use, diet, water, waste, transportation, and electricity will significantly lower this household's carbon footprint.</div>)}
        </div>
      )
    
  

}