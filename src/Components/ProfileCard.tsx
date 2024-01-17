export default function ProfileCard() {
	return (
		<div className="profile-card">
			<div className="background-box"></div>
			<img className="profile-image" src="src\assets\thunder.png"></img>
			<div className="user-info">
				<h1>Shivam Dhaka</h1>
				<p>India</p>
			</div>
			<div className="user-stats">
				<div className="user-stat">
					<img src="src\assets\trophy.png"></img>
					<h2>Rating</h2>
				</div>
				<div className="user-stat">
					<img src="src\assets\battle.png"></img>
					<h2>Matches</h2>
				</div>
				<div className="user-stat">
					<img src="src\assets\win.png"></img>
					<h2>Wins</h2>
				</div>
			</div>
		</div>
	);
}
