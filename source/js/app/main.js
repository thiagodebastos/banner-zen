// call animation function below
const animation = (() => {

    const timelineProgress = (position) => {
        console.log(`[animation] animation ${position}`)
    }

    const masterTL = new TimelineLite(
        {
            repeat: -1
              ,yoyo: false
              ,repeatDelay: 0
              ,onStart: timelineProgress
              ,onStartParams: ['start']
              ,onComplete: timelineProgress
              ,onCompleteParams: ['end']
        }
  )

    const ad = '#ad'

    /*
    * FRAME 01
    */
    const frame01 = () => {
        console.log('[animation] Frame 01')
        const tl = new TimelineMax()
        tl.to(ad, 0.5, {backgroundColor: 'white'})
        return tl
    }

    /*
    * FRAME 01
    */
    const frame02 = () => {
        console.log('[animation] Frame 02')
        const tl = new TimelineMax()

        return tl
    }


    masterTL.add(frame01())
    // .add(frame02())

    return {
        tlMain : masterTL,
    }
})
