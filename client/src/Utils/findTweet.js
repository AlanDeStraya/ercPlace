function findTweet(plan) {
  let twen, twfr, smsen, smsfr, resen, resfr;
	if(plan === '1.1') {
    twen = <td>Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Change trains at Lyon. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Changer de train à Lyon. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Change trains at Lyon.</td>;
    smsfr = <td>Ligne 1: Tout le service à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Changer de train à Lyon.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Lyon, Pimisi, and Bayview are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Lyon, Pimisi et Bayview sont ouverts. Merci de patienter.</td>;
  } else if(plan === '1.2') {
    twen = <td>Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX. Change trains at Lyon. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX. Changer de train à Lyon. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX. Change trains at Lyon.</td>;
    smsfr = <td>Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX. Changer de train à Lyon.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Bayview, Pimisi, and Lyon are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Bayview, Pimisi, et Lyon sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '1.3') {
    twen = <td>Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le serice à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Updates to follow.</td>;
    smsfr = <td>Ligne 1: Tout le serice à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Mises à  jour à suivre.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Lyon, Pimisi, and Bayview are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Lyon, Pimisi, et Bayview sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '1.4') {
    twen = <td>Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Bayview, Pimisi, and Lyon are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Bayview, Pimisi, et Lyon sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '1.5') {
    twen = <td>Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Lyon. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Lyon. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Lyon.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Lyon.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '1.6') {
    twen = <td>Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Rideau. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Rideau. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Rideau.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Rideau.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '2.1') {
    twen = <td>Line 1: All service at Rideau and Parliament at the eastbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Rideau et Parlement sur les quais est seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Rideau and Parliament at the eastbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Rideau et Parlement sur les quais est seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Rideau and Parliament stations are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Rideau et Parlement sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '2.2') {
    twen = <td>Line 1: All service at Parliament and Rideau at the westbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Parlement et Rideau sur les quais ouest seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Parliament and Rideau at the westbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Parlement et Rideau sur les quais ouest seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms Parliament and Rideau are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Parlement et Rideau sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '2.3') {
    twen = <td>Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Parliament and Rideau. Trains operating Tunney's Pasture—Parliament and Blair—Rideau. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Parlement et Rideau. Trains en service Tunney's Pasture—Parlement et Blair—Rideau. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Parliament and Rideau.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Parlement et Rideau.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '2.4') {
    twen = <td>Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Lyon and Rideau. Trains operating Tunney's Pasture—Lyon and Blair—Rideau. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Lyon et Rideau. Trains en service Tunney's Pasture—Parlement et Blair—Rideau. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Lyon and Rideau.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Lyon et Rideau.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '2.5') {
    twen = <td>Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Parliament and uOttawa. Trains operating Tunney's Pasture—Parliament and Blair—uOttawa. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Parlement et uOttawa. Trains en service Tunney's Pasture—Parlement et Blair—uOttawa. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Parliament and uOttawa.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Parlement et uOttawa.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '2.6') {
    twen = <td>Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Lyon and uOttawa. Trains operating Tunney's Pasture—Lyon and Blair—uOttawa. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Lyon et uOttawa. Trains en service Tunney's Pasture—Lyon et Blair—uOttawa. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Lyon and uOttawa.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Lyon et uOttawa.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '2.7') {
    twen = <td>Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliament and Hurdman. Trains operating Tunney's Pasture—Parliament and Blair—Hurdman. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman. Trains en service Tunney's Pasture—Parlement et Blair—Hurdman. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliament and Hurdman.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '3.1') {
    twen = <td>Line 1: All service at Hurdman, Lees, and uOttawa at the eastbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Hurdman, Lees et uOttawa sur les quais est seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Hurdman, Lees, and uOttawa at the eastbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Hurdman, Lees et uOttawa sur les quais est seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Hudman, Lees, and uOttawa are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de patienter</td>;
  } else if(plan === '3.2') {
    twen = <td>Line 1: All service at uOttawa, Lees, and Hurdman at the westbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à uOttawa, Lees et Hurdman sur les quais ouest seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at uOttawa, Lees, and Hurdman at the westbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à uOttawa, Lees et Hurdman sur les quais ouest seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at uOttawa, Lees, and Hurdman are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de patienter</td>;
  } else if(plan === '3.3') {
    twen = <td>Line 1: Travel times may be longer between Hurdman and Tremblay due to XX. All platforms at all stations remain open. Updates to follow.</td>;
    twfr = <td>Ligne 1: Les temps de trajet pourraient être augmentés entre Hurdman et Tremblay en raison de XX. Tous les quais de toutes les stations demeurent ouverts. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: Travel times may be longer between Hurdman and Tremblay due to XX. All platforms at all stations remain open.</td>;
    smsfr = <td>Ligne 1: Les temps de trajet pourraient être augmentés entre Hurdman et Tremblay. Tous les quais de toutes les stations demeurent ouverts.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '3.4') {
    twen = <td>Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliament and Hurdman. Trains operating Tunney's Pasture—Parliament and Blair—Hurdman. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman. Trains en service Tunney's Pasture—Parlement et Blair—Hurdman. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliement and Hurdman.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '3.5') {
    twen = <td>Line 1: R1 bus service running between Rideau and Hurdman due to XX. No trains between uOttawa and Hurdman. Trains operating Tunney's Pasture—uOttawa and Blair—Hurdman. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Rideau et Hurdman en raison de XX. Aucun trains entre uOttawa et Hurdman. Trains en service Tunney's Pasture—uOttawa et Blair—Hurdman. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Rideau and Hurdman due to XX. No trains between uOttawa and Hurdman.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Rideau et Hurdman en raison de XX. Aucun trains entre uOttawa et Hurdman.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '3.6') {
    twen = <td>Line 1: R1 bus service running between Rideau and St-Laurent due to XX. No trains between uOttawa and Tremblay. Trains operating Tunney's Pasture—uOttawa and Blair—Tremblay. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Rideau et St-Laurent en raison de XX. Aucun trains entre uOttawa et Tremblay. Trains en service Tunney's Pasture—uOttawa et Blair—Tremblay. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Rideau and St-Laurent due to XX. No trains between uOttawa and Tremblay.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Rideau et St-Laurent en raison de XX. Aucun trains entre uOttawa et Tremblay.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '4.1') {
    twen = <td>Line 1: All service at Tremblay at the eastbound platform only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Tremblay sur le quai est seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Tremblay at the eastbound platform only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Tremblay sur le quai est seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at all stations are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '4.2') {
    twen = <td>Line 1: All service at Tremblay at the westbound platform only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Tremblay sur le quai ouest seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Tremblay at the westbound platform only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Tremblay sur le quai ouest seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at all stations are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '4.3') {
    twen = <td>Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Hurdman and St-Laurent. Trains operating Tunney's Pasture—Hurdman and Blair—St-Laurent. Updates to follow.<br />-OR-<br />Line 1: R1 running non-stop between Hurdman and St-Laurent. On-demand shuttle between Hurdman and Tremblay. No trains between Hurdman and St-Laurent. Trains operating Tunney's Pasture—Hurdman and Blair—St-Laurent. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Hurdman et St-Laurent. Trains en service Tunney's Pasture—Hurdman et Blair—St-Laurent. Mises à jour à suivre.<br />-OR-<br />Ligne 1: R1 mis en place sans arrêt entre Hurdman et St-Laurent. Navette sur demande entre Hurdman et Tremblay. Aucun trains entre Hurdman et St-Laurent. Trains en service Tunney's Pasture—Hurdman et Blair—St-Laurent. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Hurdman and St-Laurent.<br />-OR-<br />Line 1: Non-stop R1 between Hurdman and St-Laurent. On-demand shuttle between Hurdman and Tremblay. No trains between Hurdman and St-Laurent.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Hurdman et St-Laurent.<br />-OR-<br />Ligne 1: R1 mis en place sans arrêt entre Hurdman et St-Laurent. Navette sur demande entre Hurdman et Tremblay. Aucun trains entre Hurdman et St-Laurent.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '5.1') {
    twen = <td>Line 1: Travel times may be longer between Tremblay and St-Laurent due to XX. All platforms at all stations remain open. Updates to follow.</td>;
    twfr = <td>Ligne 1: Les temps de trajet pourraient être augmentés entre Tremblay et St-Laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: Longer travel times between Tremblay and St-Laurent due to XX. All platforms at all stations remain open.</td>;
    smsfr = <td>Ligne 1: Augmentation des temps de trajet entre Tremblay et St-laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1:  Service régulier des trains a repris. Merci de votre patience.</td>;
  } else if(plan === '5.2') {
    twen = <td>Line 1: Travel times may be longer between Tremblay and St-Laurent due to XX. All platforms at all stations remain open. Updates to follow.</td>;
    twfr = <td>Ligne 1: Les temps de trajet pourraient être augmentés entre Tremblay et St-Laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: Longer travel times between Tremblay and St-Laurent due to XX. All platforms at all stations remain open.</td>;
    smsfr = <td>Ligne 1: Augmentation des temps de trajet entre Tremblay et St-laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Merci de votre patience.</td>;
  } else if(plan === '5.3') {
    twen = <td>Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Tremblay and St-Laurent. Trains operating Tunney's Pasture—Tremblay and Blair—St-Laurent. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Tremblay et St-Laurent. Trains en service Tunney's Pasture—Tremblay et Blair—St-Laurent. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Tremblay and St-Laurent.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Tremblay et St-Laurent.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '6.1') {
    twen = <td>Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX. Change trains at St-Laurent. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais est seulement en raison de XX. Changer de train à St-Laurent. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX. Change trains at St-Laurent.</td>;
    smsfr = <td>Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais est seulement en raison de XX. Changer de train à St-Laurent.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Cyrville and St-Laurent are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Cyrville et St-Laurent sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '6.2') {
    twen = <td>Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX. Change trains at St-Laurent. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX. Changer de train à St-Laurent. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX. Change trains at St-Laurent.</td>;
    smsfr = <td>Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX. Changer de train à St-Laurent.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at St-Laurent and Cyrville are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à St-Laurent et Cyrville sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '6.3') {
    twen = <td>Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais est seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais à est seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at Cyrville and St-Laurent are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1:  Service régulier des trains a repris. Tous les quais à Cyrville et St-Laurent sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '6.4') {
    twen = <td>Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX. Updates to follow.</td>;
    twfr = <td>Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX.</td>;
    smsfr = <td>Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX.</td>;
    resen = <td>RESOLVED, Line 1: Regular train service has resumed. All platforms at St-Laurent and Cyrville are open. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à St-Laurent et Cyrville sont ouverts. Merci de votre patience.</td>;
  } else if(plan === '6.5') {
    twen = <td>Line 1: R1 bus service running between St-Laurent and Blair due to XX. Trains operating between Tunney's Pasture and St-Laurent. Updates to follow.<br />-OR-<br />Line 1: R1 running non-stop between St-Laurent and Blair. On-demand shuttle between St-Laurent and Cyrville. Trains operating between Tunney's Pasture and St-Laurent. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre St-Laurent et Blair en raison de XX. Trains en service entre Tunney's Pasture et St-Laurent. Mises à jour à suivre.<br />-OR-<br />Ligne 1: R1 mis en place sans arrêt entre St-Laurent et Blair. Navette sur demande entre St-Laurent et Cyrville. Trains en service entre Tunney's Pasture et St-Laurent. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between St-Laurent and Blair due to XX. Trains operating between Tunney's Pasture and St-Laurent.<br />-OR-<br />Line 1: Non-stop R1 between St-Laurent and Blair. On-demand shuttle between St-Laurent and Cyrville. Trains operating between Tunney's Pasture and St-Laurent.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre St-Laurent et Blair en raison de XX. Trains en service entre Tunney's Pasture et St-Laurent.<br />-OR-<br />Ligne 1: R1 mis en place sans arrêt entre St-Laurent et Blair. Navette sur demande entre St-Laurent et Cyrville. Trains en service entre Tunney's Pasture et St-Laurent.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '6.6') {
    twen = <td>Line 1: R1 bus service running between Hurdman and Blair due to XX. Trains operating between Tunney's Pasture and Tremblay. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Hurdman et Blair en raison de XX. Trains en service entre Tunney's Pasture et Tremblay. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service running between Hurdman and Blair due to XX. Trains operating between Tunney's Pasture and Tremblay.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Hurdman et Blair en raison de XX. Trains en service entre Tunney's Pasture et Tremblay.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '7.1') {
    twen = <td>Line 1: R1 bus service implemented between Tunney's Pasture and Lees due to a fire alarm. No trains between Pimisi and uOttawa. Service at Bayview and Pimisi is at the <strong><em>EAST/WEST</em></strong>bound platforms only. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Lees en raison d'une alarme d'incindie. Aucun trains entre Pimisi et uOttawa. Service aux Bayview et Pimisi sur les quais à l'<strong><em>EST/OUEST</em></strong> seulement. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service implemented between Tunney's Pasture and Lees due to XX. No trains between Pimisi and uOttawa.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Lees en raison de XX. Aucun trains entre Pimisi et uOttawa.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else if(plan === '7.2') {
    twen = <td>Line 1: R1 bus service implemented between Tunney's Pasture and Hurdman due to a fire alarm. No trains between Pimisi and Hurdman. Service at Bayview and Pimisi is at the <strong><em>EAST/WEST</em></strong>bound platforms only. Updates to follow.</td>;
    twfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Hurdman en raison d'une alarme d'incindie. Aucun trains entre Pimisi et Hurdman. Service aux Bayview et Pimisi sur les quais à l'<strong><em>EST/OUEST</em></strong> seulement. Mises à jour à suivre.</td>;
    smsen = <td>Line 1: R1 bus service implemented between Tunney's Pasture and Hurdman due to XX. No trains between Pimisi and Hurdman.</td>;
    smsfr = <td>Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Hurdman en raison de XX. Aucun trains entre Pimisi et Hurdman.</td>;
    resen = <td>RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.</td>;
    resfr = <td>RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.</td>;
  } else {
		twen = undefined;
		twfr = undefined;
		smsen = undefined;
		smsfr = undefined;
		resen = undefined;
		resfr = undefined;
	}

  return (
    <>
      <h2>CS Messaging</h2>
      <table className='cs'>
        <thead>
          <tr className='red'>
            <th>Twitter (EN)</th><th>Twitter (FR)</th><th>SMS (EN)</th><th>SMS (FR)</th>
          </tr>
        </thead>
        <tbody>
          {twen}{twfr}{smsen}{smsfr}
        </tbody>
      </table>
      <table className='cs reasons'>
        <thead>
          <tr><th colspan='2'>Preapproved Reasons</th></tr>
          <tr><th>English</th><th>French</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>a medical response.</td>
            <td>une réponse médicale.</td>
          </tr>
          <tr>
            <td>a passenger incident.</td>
            <td>un incident de passager.</td>
          </tr>
          <tr>
            <td>a security incident.</td>
            <td>un incident sécuritaire.</td>
          </tr>
          <tr>
            <td>a stopped train.</td>
            <td>un train immobilisé.</td>
          </tr>
          <tr>
            <td>objects on the track.</td>
            <td>les objets sur la voie.</td>
          </tr>
        </tbody>
      </table>
      <table className='cs'>
        <thead>
          <tr className='green'>
            <th>Resolution (EN)</th><th>Resolution (FR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {resen}{resfr}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default findTweet;