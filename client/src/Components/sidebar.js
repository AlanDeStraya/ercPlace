import React from 'react';

const Sidebar = () => {
	return (
		<aside id='sidebar'>
			<button id='fireMode'>Fire!</button>
			<button id='obstructionButton'>Obstruction!</button>
			<p className='search'>Use Ctrl + F to search</p>
			<table>
				<thead>
					<tr><th>Trains</th><th>Secs</th><th>Mins</th></tr>
				</thead>
				<tbody>
					<tr><td>15</td><td>193</td><td>3:20</td></tr>
					<tr><td>14</td><td>240</td><td>4:00</td></tr>
					<tr><td>13</td><td>240</td><td>4:00</td></tr>
					<tr><td>12</td><td>270</td><td>4:30</td></tr>
					<tr><td>11</td><td>300</td><td>5:00</td></tr>
					<tr><td>10</td><td>330</td><td>5:30</td></tr>
					<tr><td>9</td><td>360</td><td>6:00</td></tr>
					<tr><td>8</td><td>420</td><td>7:00</td></tr>
					<tr><td>7</td><td>480</td><td>8:00</td></tr>
					<tr><td>6</td><td>600</td><td>10:00</td></tr>
					<tr><td>5</td><td>720</td><td>12:00</td></tr>
					<tr><td>4</td><td>900</td><td>15:00</td></tr>
				</tbody>
			</table>
			<button id='darkMode'>Toggle Dark Mode</button>
		</aside>
	);
};

export default Sidebar;