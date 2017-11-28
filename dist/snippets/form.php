<form action="mailer.php" method="post" id="form" class="form">

	<div class="form-row">
		<input type="text" id="name" name="name" required placeholder="Name">
		<input type="tel" id="phone" name="phone" required placeholder="Phone">
	</div>

	<div class="form-row">
		<input type="email" id="email" name="email" required placeholder="Email">
	</div>

	<div class="form-row">
		<textarea name="message" id="message" required placeholder="Message"></textarea>
	</div>

	<button type="submit" class="submit">Send Message</button>

</form>
