led.plot(2, 2)
basic.forever(function () {
    music.play(music.stringPlayable("A F G F D E D D ", 120), music.PlaybackMode.UntilDone)
})
Maqueen_V5.patrolling(Maqueen_V5.Patrolling.ON)
maqueen.Ultrasonic()
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)