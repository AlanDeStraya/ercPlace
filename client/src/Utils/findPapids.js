function findPapids(plan) {
  let livepa, tgbaker;
	if(plan === '1.1') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Service on line 1 is reduced between Tunney's Pasture and Lyon Stations. Customers travelling westbound from Lyon Station may need to transfer to a shuttle train to complete their trip.<br /><br />Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations Tunney's Pasture et Lyon. Les clients voyageant en direction ouest au station Lyon puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em><br /><br /><strong>LYO:</strong><br /><em>Attention: Customers travelling west must use the eastbound platform.<br /><br />Attention: Les clients voyageant vers l'ouest doivent utiliser le quai est.</em></td>;
		tgbaker = <td><strong>TUN-W, BAY-W, PIM-W:</strong> 3B and close platforms</td>;
	} else if(plan === '1.2') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Service on Line 1 is reduced between Tunney's Pasture and Lyon Stations. Customers travelling westbound from Lyon Station may need to transfer to a shuttle train to complete their trip.<br /><br />Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations Tunney's Pasture et Lyon. Les clients voyageant en direction ouest à Lyon puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em></td>;
		tgbaker = <td><strong>LYO-E, PIM-E, BAY-E:</strong> 3A and close platforms.</td>;
	} else if(plan === '1.3') {
		livepa = <td><strong>All platforms:</strong><br /><em>Delay announcement (if required)</em></td>;
		tgbaker = <td><strong>LYO-W, PIM-W, BAY-W:</strong> 3B and close platforms</td>;
	} else if(plan === '1.4') {
		livepa = <td><strong>All platforms:</strong><br /><em>Delay announcement (if required)</em></td>;
		tgbaker = <td><strong>LYO-E, PIM-E, BAY-E:</strong> 3A and close platforms</td>;
	} else if(plan === '1.5') {
		livepa = <td><strong>BLA-LYO:</strong><br /><em>Attention: Customers travelling westbound towards Tunney's Pasture must transfer to R1 replacement bus service at Lyon Station. Delays are expected.<br /><br />Attention: Les clients voyageant en direction ouest vers Tunney's Pasture doivent transférer au service d'autobus de remplacement R1 au station Lyon. Des retards sont prévus.</em></td>;
		tgbaker = <td><strong>TUN, BAY, PIM (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '1.6') {
		livepa = <td><strong>BLA-RID:</strong><br /><em>Attention: Customers travelling westbound towards Tunney's Pasture must transfer to R1 replacement bus service at Rideau Station. Delays are expected.<br /><br />Attention: Les clients voyageant en direction ouest vers Tunney's Pasture doivent transférer au service d'autobus de remplacement R1 au station Rideau. Des retards sont prévus.</em></td>;
		tgbaker = <td><strong>TUN, BAY, PIM, LYO, PAR (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '2.1') {
		livepa = <td><strong>All platforms:</strong><br /><em>Delay announcement (if required)</em></td>;
		tgbaker = <td><strong>PAR-W, RID-W:</strong> 3B and close platforms</td>;
	} else if(plan === '2.2') {
		livepa = <td><strong>All platforms:</strong><br /><em>Delay announcement (if required)</em></td>;
		tgbaker = <td><strong>PAR-E, RID-E:</strong> 3A and close platforms</td>;
	} else if(plan === '2.3') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Line 1 is not operating between Parliament and Rideau Stations. R1 replacement bus service is operating between Parliament and Rideau Stations.<br /><br />Attention: La ligne 1 ne fonctionne pas entre les stations Parliament et Rideau. Le service d'autobus de remplacement R1 est en service entre les stations Parliament et Rideau.</em></td>;
		tgbaker = <td>Close platforms not in service (if applicable)</td>;
	} else if(plan ==='2.4') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Line 1 is not operating between Lyon and Rideau Stations. R1 replacement bus service is operating between Lyon and Rideau Stations.<br /><br />Attention: La ligne 1 ne fonctionne pas entre les stations Lyon et Rideau. Le service d'autobus de remplacement R1 est en service entre les stations Lyon et Rideau.</em></td>;
		tgbaker = <td><strong>PAR (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '2.5') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Line 1 is not operating between Parliament and UOttawa stations. R1 replacement bus service is operating between Parliament and Lees Stations.<br /><br />Attention: La ligne 1 ne fonctionne pas entre les stations Parliament et UOttawa. Le service d'autobus de remplacement R1 est en service entre les stations Parliament et Lees.</em></td>;
		tgbaker = <td><strong>RID (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '2.6') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Line 1 is not operating between Lyon and UOttawa stations. R1 replacement bus service is operating between Lyon and Lees Stations.<br /><br />Attention: La ligne 1 ne fonctionne pas entre les stations Lyon et UOttawa. Le service d'autobus de remplacement R1 est en service entre les stations Lyon et Lees.</em></td>;
		tgbaker = <td><strong>PAR, RID (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '2.7') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Line 1 is not operating between Parliament and Hurdman stations. R1 replacement bus service is operating between Lyon and Lees Stations.<br /><br />Attention: La ligne 1 ne fonctionne pas entre les stations Parliament et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Lyon et Lees.</em></td>;
		tgbaker = <td><strong>RID, UOT, LEE (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '3.1') {
		livepa = <td><strong>All platforms:</strong><br /><em>Delay announcements (if required)</em></td>;
		tgbaker = <td><strong>HUR-W, LEE-W, UOT-W:</strong> 3B and close platforms</td>;
	} else if(plan === '3.2') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td><strong>HUR-E, LEE-E, UOT-E:</strong> 3A and close platforms</td>;
	} else if(plan === '3.3') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td>Close platforms not in service (if applicable).</td>;
	} else if(plan === '3.4') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen Parliament and Hurdman Stations. R1 replacement bus service is operating between Parliament and Hurdman stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations Parliament et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Parliament et Hurdman.</em></td>;
		tgbaker = <td><strong>RID, UOT, LEE (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '3.5') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen UOttawa and Hurdman Stations. R1 replacement bus service is operating between Rideau and Hurdman stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations UOttawa et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Rideau et Hurdman.</em></td>;
		tgbaker = <td><strong>LEE, HUR (all zones): 5D and close platforms</strong></td>;
	} else if(plan === '3.6') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen UOttawa and Tremblay Stations. R1 replacement bus service is operating between Rideau and St Laurent stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations UOttawa et Tremblay. Le service d'autobus de remplacement R1 est en service entre les stations Rideau et St Laurent.</em></td>;
	} else if(plan === '4.1') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td><strong>TRE-W:</strong> 3B and close platforms</td>;
	} else if(plan === '4.2') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td><strong>TRE-E:</strong> 3A and close platforms</td>;
	} else if(plan === '4.3') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen Hurdman and St Laurent Stations. R1 replacement bus service is operating between Hurdman and St Laurent stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations Hurdman et St Laurent. Le service d'autobus de remplacement R1 est en service entre les stations Hurdman et St Laurent.</em></td>;
		tgbaker = <td><strong>TRE (all zones):</strong> 5D and close platforms</td>;
	} else if(plan === '5.1') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td></td>;
	} else if(plan === '5.2') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td></td>;
	} else if(plan === '5.3') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen Tremblay and St Laurent Stations. R1 replacement bus service is operating between Hurdman and St Laurent stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations Tremblay et St Laurent. Le service d'autobus de remplacement R1 est en service entre les stations Hurdman et St Laurent.</em></td>;
		tgbaker = <td>Close platforms not in use (if applicable)</td>;
	} else if(plan === '6.1') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Service on Line 1 is reduced between Stl Laurent and Blair stations. Customers travelling eastbound from St Laurent Station may need to transfer to a shuttle train to complete their trip.<br /><br />Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations St Laurent et Blair. Les clients voyageant en direction est au station St Laurent puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em></td>;
		tgbaker = <td><strong>CYR-W:</strong> 3B Close platform</td>;
	} else if(plan === '6.2') {
		livepa = <td><strong>All platforms:</strong><br /><em>Attention: Service on Line 1 is reduced between Stl Laurent and Blair stations. Customers travelling eastbound from St Laurent Station may need to transfer to a shuttle train to complete their trip.<br /><br />Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations St Laurent et Blair. Les clients voyageant en direction est au station St Laurent puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em><br /><br /><strong>STL:</strong><br /><em>Attention: Customers travelling east must use the westbound platform.<br /><br />Attention: Les clients voyageant vers l'est doivent utiliser le quai ouest.</em></td>;
		tgbaker = <td><strong>CYR-W:</strong> 3A Close platform</td>;
	} else if(plan === '6.3') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td><strong>STL-W, CYR-W:</strong> 3B Close platfoms</td>;
	} else if(plan === '6.4') {
		livepa = <td><strong>All platforms:</strong><br /><em> Delay announcements (if required)</em></td>;
		tgbaker = <td><strong>STL-E, CYR-E:</strong> 3A Close platfoms</td>;
	} else if(plan === '6.5') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen St Laurent and Blair Stations. R1 replacement bus service is operating between St Laurent and Blair stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations St Laurent et Blair. Le service d'autobus de remplacement R1 est en service entre les stations St Laurent et Blair.</em></td>;
		tgbaker = <td><strong>CYR, BLA (all zones):</strong> 5D Close platforms</td>;
	} else if(plan === '6.6') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen Tremblay and Blair Stations. R1 replacement bus service is operating between Hurdman and Blair stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations Tremblay et Blair. Le service d'autobus de remplacement R1 est en service entre les stations Hurdman et Blair.</em></td>;
		tgbaker = <td><strong>STL, CYR, BLA (all zones):</strong> 5D Close platforms</td>;
	} else if(plan === '7.1') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen Pimisi and UOttawa Stations. R1 replacement bus service is operating between Tunney's and Lees stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations Pimisi et UOttawa. Le service d'autobus de remplacement R1 est en service entre les stations Tunney's et Lees.</em></td>;
		tgbaker = <td><strong>LYO, PAR, RID (all zones):</strong> 5D Close platforms</td>;
	} else if(plan === '7.2') {
		livepa = <td><strong>All platforms:</strong><br /><em> Attention: Line 1 is not operating betweeen Pimisi and Hurdman Stations. R1 replacement bus service is operating between Tunney's and Hurdman stations.<br /><br />Attention: La Ligne 1 ne fonctionne pas entre les stations Pimisi et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Tunney's et Hurdman.</em></td>;
		tgbaker = <td><strong>LYO, PAR, RID, UOT, LEE (all zones):</strong> 5D Close platforms</td>;
	} else {
		livepa = undefined;
		tgbaker = undefined;
	}

  return (
    <>
      <h2>PA/PIDS</h2>
      <table>
        <thead>
          <tr>
            <th>Plan #</th><th>Live PA (every 5 mins or as needed or as otherwise indicated)</th><th>TG Baker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {plan}{livepa}{tgbaker}
          </tr>
        </tbody>
      </table>
    </>
  )

}

export default findPapids;