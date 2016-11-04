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
    * FRAME 02
    */
    const frame02 = () => {
        console.log('[animation] Frame 02')
        const tl = new TimelineMax()

        return tl
    }

    /*
    * FRAME 03
    */
    const frame03 = () => {
        console.log('[animation] Frame 03')
        const tl = new TimelineMax()

        return tl
    }

    // Cache frames - This results in frames executing between tl.onStart and tl.onComplete
    const frames = [frame01, frame02, frame03]

    // Add cached frames to timeline
    masterTL.add(frames)

    return {
        tlMain : masterTL,
    }
})
