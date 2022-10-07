import React from 'react';
import { useState } from 'react';

import styles from './iosReference.css';

const IosReference = () => {

  return (
	<div id='ios-reference'>
    <h2 id='intro'>Click or hover for details</h2>
    <table id='codes'>
      <tbody>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-zero'></a><span className='tooltiptext'>00 N/A</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#one-zero'>10 ED</a><span className='tooltiptext'>10 One EVR recording faulty in multiple units</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#two-zero'>20 ED</a><span className='tooltiptext'>20 Rollback detection bypassed</span></div></td>
          <td className='el'><div className='tooltip'><a href='#three-zero'>30 EL</a><span className='tooltiptext'>30 Central Unit - Major Fault (Fire detection system)</span></div></td>
          <td className='el'><div className='tooltip'><a href='#four-zero'>40 EL</a><span className='tooltiptext'>40 Loss of one battery</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#five-zero'>50 ED</a><span className='tooltiptext'>50 Loss of two doors</span></div></td>
          <td className='el'><div className='tooltip'><a href='#six-zero'>60 EL</a><span className='tooltiptext'>60 Loss of one audio hub (cab)</span></div></td>
          <td className='tp'><div className='tooltip'><a href='#seven-zero'>70 TP</a><span className='tooltiptext'>70 Manual mode and ATO mode not available</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-zero'>80 ED</a><span className='tooltiptext'>80 Inconsistency between "standstill" thresholds from PCEs</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-one'>01 --</a><span className='tooltiptext'>01 At least one weight measurement not operational</span></div></td>
          <td className='el'><div className='tooltip'><a href='#one-one'>11 EL</a><span className='tooltiptext'>11 All EVR recording faulty</span></div></td>
          <td className='el'><div className='tooltip'><a href='#two-one'>21 EL</a><span className='tooltiptext'>21 Dead man monitoring bypassed and ATO Mode available</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#three-one'>31 --</a><span className='tooltiptext'>31 N/A</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#four-one'>41 WD</a><span className='tooltiptext'>41 Loss of all batteries</span></div></td>
          <td className='el'><div className='tooltip'><a href='#five-one'>51 EL</a><span className='tooltiptext'>51 Loss of at least three doors</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#six-one'>61 ED</a><span className='tooltiptext'>61 Loss of one audio hub (saloon)</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#seven-one'>71 --</a><span className='tooltiptext'>71 At least one NVR memory almost full</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-one'>81 --</a><span className='tooltiptext'>81 Loss of passenger counting</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-two'>02 --</a><span className='tooltiptext'>02 N/A</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#one-two'>12 ED</a><span className='tooltiptext'>12 Loss of one compressor</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#two-two'>22 WD</a><span className='tooltiptext'>22 Door loops monitoring bypassed</span></div></td>
          <td className='ms'><div className='tooltip'><a href='#three-two'>32 HF</a><span className='tooltiptext'>32 Loss of heating floor (low external temperature)</span></div></td>
          <td className='el'><div className='tooltip'><a href='#four-two'>42 EL</a><span className='tooltiptext'>42 Loss of one APS</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#five-two'>52 WD</a><span className='tooltiptext'>52 Loss of two or more doors on the same side in same unit</span></div></td>
          <td className='el'><div className='tooltip'><a href='#six-two'>62 EL</a><span className='tooltiptext'>62 Loss of two successive audio humb (saloon) - loss of all loudspeaker in one car</span></div></td>
          <td className='el'><div className='tooltip'><a href='#seven-two'>72 EL</a><span className='tooltiptext'>72 Manual mode unavailable</span></div></td>
          <td className='nt'><div className='tooltip'><a href='#eight-two'>82 !!</a><span className='tooltiptext'>82 Inconsistency between "standstill" thresholds from EBCUs</span></div></td>
        </tr>
        <tr>
          <td className='el'><div className='tooltip'><a href='#zero-three'>03 EL</a><span className='tooltiptext'>03 At least one leveling system is isolated on the train</span></div></td>
          <td className='el'><div className='tooltip'><a href='#one-three'>13 EL</a><span className='tooltiptext'>13 All air compressors lost in a same unit</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#two-three'>23 ED</a><span className='tooltiptext'>23 Inconsistency between track brake threshold from PCEs</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#three-three'>33 --</a><span className='tooltiptext'>33 N/A</span></div></td>
          <td className='tp'><div className='tooltip'><a href='#four-three'>43 TP</a><span className='tooltiptext'>43 Loss of whole APS in a unit</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#five-three'>53 --</a><span className='tooltiptext'>53 At least one emergency evacuation has been requested</span></div></td>
          <td className='el'><div className='tooltip'><a href='#six-three'>63 **</a><span className='tooltiptext'>63 Loss of 1 PEI (except the PEIs near cab in MC1 and MC2)</span></div></td>
          <td className='tp'><div className='tooltip'><a href='#seven-three'>73 TP</a><span className='tooltiptext'>73 Traction major fault level 1</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-three'>83 ED</a><span className='tooltiptext'>83 Failure of the relay Q1-STS - failed in working position</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-four'>04 --</a><span className='tooltiptext'>04 EVR tachnymetry is faulty</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#one-four'>14 WD</a><span className='tooltiptext'>14 Dead man monitoring bypassed and ATO mode unavailable</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#two-four'>24 ED</a><span className='tooltiptext'>24 Brake degraded mode level 1</span></div></td>
          <td className='ms'><div className='tooltip'><a href='#three-four'>34 CH</a><span className='tooltiptext'>34 Loss of cabin heater</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#four-four'>44 WD</a><span className='tooltiptext'>44 Loss of one APS in each units</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#five-four'>54 --</a><span className='tooltiptext'>54 Loss of one camera</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#six-four'>64 --</a><span className='tooltiptext'>64 Loss of 1 PEI (only for PEIs near the cab in MC1 and MC2)</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#seven-four'>74 WD</a><span className='tooltiptext'>74 Traction major fault level 2</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-four'>84 ED</a><span className='tooltiptext'>84 Inconsistency between the closing doors relays</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-five'>05 --</a><span className='tooltiptext'>05 N/A</span></div></td>
          <td className='tp'><div className='tooltip'><a href='#one-five'>15 TP</a><span className='tooltiptext'>15 Train driving direction discordance</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#two-five'>25 ED</a><span className='tooltiptext'>25 Brake degraded mode level 2</span></div></td>
          <td className='el'><div className='tooltip'><a href='#three-five'>35 EL</a><span className='tooltiptext'>35 Too many HVAC cannot provide a fresh air flow (HVAC down or fresh air dampers closed)</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#four-five'>45 ED</a><span className='tooltiptext'>45 Failure of at least one relay Q1(PBEB)BRK - failed in working position</span></div></td>
          <td className='el'><div className='tooltip'><a href='#five-five'>55 **</a><span className='tooltiptext'>55 Loss of the two cameras in one car</span></div></td>
          <td className='el'><div className='tooltip'><a href='#six-five'>65 **</a><span className='tooltiptext'>65 Loss of Public Address</span></div></td>
          <td className='el'><div className='tooltip'><a href='#seven-five'>75 EL</a><span className='tooltiptext'>75 Traction major fault level 3</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-five'>85 ED</a><span className='tooltiptext'>85 At least one brake is applied during traction</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-six'>06 ED</a><span className='tooltiptext'>06 One brake isoalted and still applied</span></div></td>
          <td className='tp'><div className='tooltip'><a href='#one-six'>16 TP</a><span className='tooltiptext'>16 The folding device is unlocked whereas mechanical head is coupled</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#two-six'>26 WD</a><span className='tooltiptext'>26 Brake degraded mode level 3</span></div></td>
          <td className='ms'><div className='tooltip'><a href='#three-six'>36 HF</a><span className='tooltiptext'>36 Loss of heating floor</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#four-six'>46 ED</a><span className='tooltiptext'>46 Failure of at least one contactor C(FAST)BRK - failed in working position</span></div></td>
          <td className='el'><div className='tooltip'><a href='#five-six'>56 **</a><span className='tooltiptext'>56 Loss of the two NVR in one element(+)</span></div></td>
          <td className='el'><div className='tooltip'><a href='#six-six'>66 **</a><span className='tooltiptext'>66 Loss of internal displaying/impaired displaying in one car</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#seven-six'>76 ED</a><span className='tooltiptext'>76 Traction major fault level 4</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-six'></a><span className='tooltiptext'>86 There is no IOS086</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-seven'>07 ED</a><span className='tooltiptext'>07 At least one brake is under major fault</span></div></td>
          <td className='nt'><div className='tooltip'><a href='#one-seven'>17 !!</a><span className='tooltiptext'>17 Inconsistency between the low speed relays (Q(TBR)PCE-Mcx/Q(TBR)EBCU-MCx) and between the standstill relays (Q(STS)PCEx/Q(STS)EBCU-T)</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#two-seven'>27 WD</a><span className='tooltiptext'>27 Brake degraded mode level 4 (Click to see note)</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#three-seven'>37 ED</a><span className='tooltiptext'>37 At least 1 HVAC cannot provide a fresh air flow (HVAC down or fresh air dampers closed)</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#four-seven'>47 ED</a><span className='tooltiptext'>47 Failure of one EBCC/EBCU which send untimely the information "brake applied"</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#five-seven'>57 --</a><span className='tooltiptext'>57 Loss of the two externam cameras on one side for one element</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#six-seven'>67 --</a><span className='tooltiptext'>67 Loss of front displaying</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#seven-seven'>77 --</a><span className='tooltiptext'>77 Traction major fault level 5</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-seven'></a><span className='tooltiptext'>87 There is no IOS087</span></div></td>
        </tr>
        <tr>
          <td className='el'><div className='tooltip'><a href='#zero-eight'>08 EL</a><span className='tooltiptext'>08 Leveling system is not available or high leakage in pneumatic circuit</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#one-eight'>18 ED</a><span className='tooltiptext'>18 Inconsistency between the state of the relays Q(LV)EBR of each MCx</span></div></td>
          <td className='tp'><div className='tooltip'><a href='#two-eight'>28 TP</a><span className='tooltiptext'>28 Brake degraded mode level 5</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#three-eight'>38 --</a><span className='tooltiptext'>38 N/A</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#four-eight'>48 --</a><span className='tooltiptext'>48 Reliability to availability switch for fast brake relays S(FAST)BRK switch activated</span></div></td>
          <td className='el'><div className='tooltip'><a href='#five-eight'>58 **</a><span className='tooltiptext'>58 Loss of external camera</span></div></td>
          <td className='wd'><div className='tooltip'><a href='#six-eight'>68 WD</a><span className='tooltiptext'>68 Incoherency with DRV relay or key switch</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#seven-eight'>78 ED</a><span className='tooltiptext'>78 Failure of at least one relay Q1(FAST)BRK - failed in working position</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-eight'></a><span className='tooltiptext'>88 There is no IOS088</span></div></td>
        </tr>
        <tr>
          <td className='gd'><div className='tooltip'><a href='#zero-nine'>09 ED</a><span className='tooltiptext'>09 At least one trake brake untimely applied</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#one-nine'>19 --</a><span className='tooltiptext'>19 Safety loops power supply switch activated</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#two-nine'>29 ED</a><span className='tooltiptext'>29 Central Unit - Minor Fault (Fire detection system)</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#three-nine'>39 --</a><span className='tooltiptext'>39 N/A</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#four-nine'>49 ED</a><span className='tooltiptext'>49 Loss of one door</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#five-nine'>59 ED</a><span className='tooltiptext'>59 Loss of one NVR</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#six-nine'>69 ED</a><span className='tooltiptext'>69 Loss of lateral displaying</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#seven-nine'>79 --</a><span className='tooltiptext'>79 ATC bypassed</span></div></td>
          <td className='gd'><div className='tooltip'><a href='#eight-nine'></a><span className='tooltiptext'>89 There is no IOS089</span></div></td>
        </tr>
      </tbody>
    </table>
    <br />

    <sub id='index-link'></sub>
    <h3 id='index-title'>Index</h3>
    <table id='index-table'>
      <tr>
        <td className='gd'><strong>ED =</strong> End of Day</td>
        <td className='el'><strong>EL =</strong> End of Line</td>
        <td className='wd'><strong>WD =</strong> Withdraw</td>
        <td className='tp'><strong>TP =</strong> Tow/push</td>
      </tr>
      <tr>
        <td className='gd'><strong>-- =</strong> N/A, MC (Maintenance code)</td>
        <td className='el'><strong>** =</strong> 10 min code <em>(EL)</em></td>
        <td className='ms'><strong>HF =</strong> Heated floor</td>
        <td className='ms'><strong>CH =</strong> Cab heater</td>
      </tr>
    </table>
    <br />
    <br />

    <div id='detail-section'>
      <sub id='detail-link'></sub>
      <h4 className='details' id='detail-title'>Details</h4>
      <p className='details' id='zero'>
        <sub id='zero-one'></sub><span className='green'>01 - MC - At least one weight measurement not operational</span><br />
        <sub id='zero-two'></sub><span className='green'>02 - N/A - N/A</span><br />
        <sub id='zero-three'></sub><span className='yellow'>03 - EL - At least one leveling system is isolated on the train</span><br />
        <sub id='zero-four'></sub><span className='green'>04 - MC - EVR tachnymetry is faulty</span><br />
        <sub id='zero-five'></sub><span className='green'>05 - N/A - N/A</span><br />
        <sub id='zero-six'></sub><span className='green'>06 - ED - One Brake isolated and still applied</span><br />
        <sub id='zero-seven'></sub><span className='green'>07 - ED - At least one Brake is under major fault</span><br />
        <sub id='zero-eight'></sub><span className='yellow'>08 - EL - Leveling system is not available or high leakage in pneumatic circuit</span><br />
        <sub id='zero-nine'></sub><span className='green'>09 - ED - At least one track brake untimely applied</span><br />
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <p className='details' id='one'>
        <sub id='one-zero'></sub><span className='green'>10 - ED - One EVR recording faulty in multiple units</span><br />
        <sub id='one-one'></sub><span className='yellow'>11 - EL - All EVR recording faulty</span><br />
        <sub id='one-two'></sub><span className='green'>12 - ED - Loss of one compressor</span><br />
        <sub id='one-three'></sub><span className='yellow'>13 - ED - All air compressors lost in a same unit</span><br />
        <sub id='one-four'></sub><span className='orange'>14 - WD - Dead man monitoring bypassed and ATO Mode unavailable</span><br />
        <sub id='one-five'></sub><span className='red'>15 - TP - Train driving direction discordance</span><br />
        <sub id='one-six'></sub><span className='red'>16 - TP - The folding device is unlocked whereas mechanical head is coupled</span><br />
        <sub id='one-seven'></sub><span className='purple'>17 - !! - ED - Inconsistency between the low speed relays (Q(TBR)PCE-Mcx/Q(TBR)EBCU-MCx) and between the standstill relays (Q(STS)PCEx/Q(STS)EBCU-T) - <a href='#door-open-note'><em>See note</em></a></span><br />
        <sub id='one-eight'></sub><span className='green'>18 - ED - Inconsistency between the state of the relays Q(LV)EBR of each MCx</span><br />
        <sub id='one-nine'></sub><span className='green'>19 - MC - Safety loops power supply switch activated</span><br />
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='two'>
        <sub id='two-zero'></sub><span className='green'>20 - ED - Rollback detection bypassed</span><br />
        <sub id='two-one'></sub><span className='yellow'>21 - EL - Dead man monitoring bypassed and ATO Mode available</span><br />
        <sub id='two-two'></sub><span className='orange'>22 - WD - Door loops monitoring bypassed</span><br />
        <sub id='two-three'></sub><span className='green'>23 - ED - Inconsistency between track brake threshold from PCEs</span><br />
        <sub id='two-four'></sub><span className='green'>24 - ED - Brake degraded mode level 1</span><br />
        <sub id='two-five'></sub><span className='green'>25 - ED - Brake degraded mode level 2</span><br />
        <sub id='two-six'></sub><span className='orange'>26 - WD - Brake degraded mode level 3</span><br />
        <sub id='two-seven'></sub><span className='orange'>27 - WD - Brake degraded mode level 4 (Often track brake, reset may fix. Reset EB then press track brake button)</span><br />
        <sub id='two-eight'></sub><span className='red'>28 - TP - Brake degraded mode level 5</span><br />
        <sub id='two-nine'></sub><span className='green'>29 - ED - Central Unit - Minor Fault (Fire detection system)</span><br />
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='three'>
        <sub id='three-zero'></sub><span className='yellow'>30 - EL - Central Unit - Major Fault (Fire detection system)</span><br />
        <sub id='three-one'></sub><span className='green'>31 - N/A - N/A</span><br />
        <sub id='three-two'></sub><span className='blue'>32 - EL - Loss of heating floor (low external temperature)</span><br />
        <sub id='three-three'></sub><span className='green'>33 - N/A - N/A</span><br />
        <sub id='three-four'></sub><span className='blue'>34 - ED - Loss of cabin heater</span><br />
        <sub id='three-five'></sub><span className='yellow'>35 - EL - Too many HVAC cannot provide a fresh air flow in the same unit (HVAC down or fresh air dampers closed)</span><br />
        <sub id='three-six'></sub><span className='blue'>36 - ED - Loss of heating floor</span><br />
        <sub id='three-seven'></sub><span className='green'>37 - ED - At least 1 HVAC cannot provide a fresh air flow in the same unit (HVAC down or fresh air dampers closed)</span><br />
        <sub id='three-eight'></sub><span className='green'>38 - N/A - N/A</span><br />
        <sub id='three-nine'></sub><span className='green'>39 - N/A - N/A</span><br />
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='four'>
        <sub id='four-zero'></sub><span className='yellow'>40 -  EL - Loss of one battery</span><br />
        <sub id='four-one'></sub><span className='orange'>41 - WD - Loss of all batteries</span><br />
        <sub id='four-two'></sub><span className='yellow'>42 - EL - Loss of one APS</span><br />
        <sub id='four-three'></sub><span className='red'>43 - TP - Loss of whole APS in a unit</span><br />
        <sub id='four-four'></sub><span className='orange'>44 - WD - Loss of one APS in each units</span><br />
        <sub id='four-five'></sub><span className='green'>45 - WD - Failure of at least one relay Q1(PBEB)BRK - failed in working position</span><br />
        <sub id='four-six'></sub><span className='green'>46 - ED - Failure of at least one contactor C(FAST)BRK - failed in working position</span><br />
        <sub id='four-seven'></sub><span className='green'>47 - ED - Failure of one EBCC/EBCU which send untimely the information "brake applied"</span><br />
        <sub id='four-eight'></sub><span className='green'>48 - MC - Reliability to availability switch for fast brake relays S(FAST)BRK switch activated</span><br />
        <sub id='four-nine'></sub><span className='green'>49 - ED - Loss of one door</span><br />
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='five'>
        <sub id='five-zero'></sub><span className='green'>50 - ED - Loss of two doors</span><br />
        <sub id='five-one'></sub><span className='yellow'>51 - EL - Loss of at least three doors</span><br />
        <sub id='five-two'></sub><span className='orange'>52 - WD - Loss of two or more doors on the same side in same unit</span><br />
        <sub id='five-three'></sub><span className='green'>53 - MC - At least one emergency evacuation has been requested</span><br />
        <sub id='five-four'></sub><span className='green'>54 - MC - Loss of one camera</span><br />
        <sub id='five-five'></sub><span className='yellow'>55 - EL - Loss of the two cameras in one car <strong>(+)</strong></span><br />
        <sub id='five-six'></sub><span className='yellow'>56 - EL - Loss of the two NVR in one element <strong>(+)</strong></span><br />
        <sub id='five-seven'></sub><span className='green'>57 - MC - Loss of the two external cameras on one side for one element</span><br />
        <sub id='five-eight'></sub><span className='yellow'>58 - EL - Loss of external camera <strong>(+)</strong></span><br />
        <sub id='five-nine'></sub><span className='green'>59 - ED - Loss of one NVR</span><br />
        &nbsp; &nbsp; &nbsp; <strong>(+)</strong><em> If > 10 mins, have YCC check server room if cameras are working; Yes = ok; No = EL</em>
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='six'>
        <sub id='six-zero'></sub><span className='yellow'>60 - EL - Loss of one audio hub (cab)</span><br />
        <sub id='six-one'></sub><span className='green'>61 - ED - Loss of one audio hub (saloon)</span><br />
        <sub id='six-two'></sub><span className='yellow'>62 - EL - Loss of two successive audio hub (saloon) - loss of all loudspeaker in one car</span><br />
        <sub id='six-three'></sub><span className='yellow'>63 - EL - Loss of 1 PEI (except the PEIs near cab in MC1 and MC2) <strong>(++)</strong></span><br />
        <sub id='six-four'></sub><span className='green'>64 - MC - Loss of 1 PEI (only for the PEIs near the cab in MC1 and MC2)</span><br />
        <sub id='six-five'></sub><span className='yellow'>65 - EL - Loss of Public Address <strong>(++)</strong></span><br />
        <sub id='six-six'></sub><span className='yellow'>66 - EL - Loss of internal displaying/impaired displaying in one car <strong>(+++)</strong></span><br />
        <sub id='six-seven'></sub><span className='green'>67 - MC - Loss of front displaying</span><br />
        <sub id='six-eight'></sub><span className='orange'>68 - WD - Incoherency with DRV relay or key switch</span><br />
        <sub id='six-nine'></sub><span className='green'>69 - ED - Loss of lateral displaying</span><br />
        &nbsp; &nbsp; &nbsp; <strong>(++)</strong><em> If > 10 mins, code is real (EL)</em><br />
        &nbsp; &nbsp; &nbsp; <strong>(+++)</strong><em> If > 10 mins, have YCC check server room if displays are working; Yes = ok; No = EL</em>
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='seven'>
        <sub id='seven-zero'></sub><span className='red'>70 - TP - Manual mode and ATO not available</span><br />
        <sub id='seven-one'></sub><span className='green'>71 - MC - At least one NVR memory almost full</span><br />
        <sub id='seven-two'></sub><span className='yellow'>72 - EL - Manual mode unavailable</span><br />
        <sub id='seven-three'></sub><span className='red'>73 - TP - Traction major fault level 1</span><br />
        <sub id='seven-four'></sub><span className='orange'>74 - WD - Traction major fault level 2</span><br />
        <sub id='seven-five'></sub><span className='yellow'>75 - EL - Traction major fault level 3</span><br />
        <sub id='seven-six'></sub><span className='green'>76 - ED - Traction major fault level 4</span><br />
        <sub id='seven-seven'></sub><span className='green'>77 - MC - Traction major fault level 5</span><br />
        <sub id='seven-eight'></sub><span className='green'>78 - ED - Failure of at least one Q1(FAST)BRK - failed in working position</span><br />
        <sub id='seven-nine'></sub><span className='green'>79 - MC - ATC bypassed</span><br />
      </p>
      <a href='#top' className='reduced-link'><em>^Top</em></a>
      <br />
      <br />
      <p className='details' id='eight'>
        <sub id='eight-zero'></sub><span className='green'>80 - ED - Inconsistency between "standstill" thresholds from PCEs</span><br />
        <sub id='eight-one'></sub><span className='green'>81 - MC - Loss of passenger counting</span><br />
        <sub id='eight-two'></sub><span className='purple'>82 - !! - ED - Inconsistency between "standstill" thresholds from EBCUs - <a href='#door-open-note'><em>See note</em></a></span><br />
        <sub id='eight-three'></sub><span className='green'>83 - ED - Failure of the relay Q1-STS - failed in working position</span><br />
        <sub id='eight-four'></sub><span className='green'>84 - ED - Inconsistency between the closing doors relays</span><br />
        <sub id='eight-five'></sub><span className='green'>85 - ED - At least one brake is applied during traction</span><br />
      </p>
    </div>
    <br />
    <div>
    <a href='#top' className='reduced-link'><em>^Top</em></a>
    <hr />
    </div>
    <br />
    <br />
    <div>
      <h3><sub id='door-open-note'></sub><span className='purple'>!! - If both 017 and 082 appear (CLC-20-52)</span></h3>
      <p>If doors cannot be opened, and all conventional techniques fail to do so, the following steps should be followed:</p>
      <ol>
        <li>Lower the Pantograph</li>
        <li>Open the Bypass cabinet and unprepare the train by pressing the PB(UNPREPARE) pushbutton</li>
        <li>Instruct passengers via PA system to fully pull the EDR and push the doors open to evacuate the train</li>
      </ol>
    </div>
    <br />
    <br />
    <a href='#top' className='reduced-link'><em>^Top</em></a>
    <br />
    <br />
	</div>
  );
};

export default IosReference;
