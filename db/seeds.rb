User.destroy_all
Upperbody.destroy_all
Lowerbody.destroy_all
LegsAndBack.destroy_all
ChestAndArm.destroy_all
WorkoutType.destroy_all

User.create({name: "Skylar Youmans", username:"Skyoumans93", password:"Bornthisway93", email:"skyyoumans@gmail.com", currentweight: 280, profileimg: "https://i.imgur.com/aNt2kxdm.jpg", currentbicepsize: 16, currentthighsize: 30, currentchestsize: 42, currentwaistsize: 43})
User.create({name: "Brian Stokes", username:"AuburnBoy17", password:"IAmBrianStokes", email:"bstokes911@gmail.com", currentweight: 220, profileimg: "https://i.imgur.com/lRkWYDGm.jpg", currentbicepsize: 16, currentthighsize: 31, currentchestsize: 42, currentwaistsize: 38})

Upperbody.create({bpress: 10, bentoverrow: 10, overheadpress: 10, latraise: 12, overheaddbellpress: 10, tricepextension: 12, pullups: 4, bicepcurl: 12})
Upperbody.create({bpress: 12, bentoverrow: 12, overheadpress: 12, latraise: 14, overheaddbellpress: 12, tricepextension: 14, pullups: 5, bicepcurl: 14})
Upperbody.create({bpress: 14, bentoverrow: 14, overheadpress: 14, latraise: 16, overheaddbellpress: 14, tricepextension: 16, pullups: 6, bicepcurl: 16})

Lowerbody.create({legextensions: 10, frontsquat: 10, hacksquat: 10, dbellstepup: 10, romaniandeadlift: 10, lyinglegcurl: 8})
Lowerbody.create({legextensions: 12, frontsquat: 12, hacksquat: 12, dbellstepup: 12, romaniandeadlift: 12, lyinglegcurl: 10})
Lowerbody.create({legextensions: 14, frontsquat: 14, hacksquat: 14, dbellstepup: 14, romaniandeadlift: 14, lyinglegcurl: 12})

LegsAndBack.create({deadlift: 6, lyinglegcurl: 10, latraise: 12, tbarrow: 10, widecablerow: 10, dbelllunges: 10})
LegsAndBack.create({deadlift: 8, lyinglegcurl: 12, latraise: 14, tbarrow: 12, widecablerow: 12, dbelllunges: 12})
LegsAndBack.create({deadlift: 10, lyinglegcurl: 14, latraise: 16, tbarrow: 14, widecablerow: 14, dbelllunges: 14})

ChestAndArm.create({bpress: 10, dbellpress: 10, seatedmachinechestpress: 10, inclinebenchcablefly: 10, barbellcurl: 12, standingbicepcablecurl: 10})
ChestAndArm.create({bpress: 12, dbellpress: 12, seatedmachinechestpress: 12, inclinebenchcablefly: 12, barbellcurl: 14, standingbicepcablecurl: 12})
ChestAndArm.create({bpress: 14, dbellpress: 14, seatedmachinechestpress: 14, inclinebenchcablefly: 14, barbellcurl: 16, standingbicepcablecurl: 14})

WorkoutType.create({name: "Upper body", description: "A workout focusing attention on the entire upper body."})
WorkoutType.create({name: "Lower body", description: "This workout spends its time focusing on the lower body, from buttocks to calves."})
WorkoutType.create({name: "Legs and Back", description: "This workout type is spending the day dealing with exercises that only deal with working out the legs and back."})
WorkoutType.create({name: "Chest and Arms", description: "Selecting this workout will allow you to spend the workout focusing on your chest and arms."})
WorkoutType.create({name: "Core", description: "Following this workout will give your core some attention, allowing you to trim your waist and build up your abdominals."})

