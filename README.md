Placeholder
===========

A simple Mootools class to beauty your form similar to the Apple Store checkout form.

![Screenshot](http://labs.icarusone.com/smallplace.png)

How to use
----------

Attach Mootools core and Placeholder to your document.

	<script type="text/javascipt" src="mootools1.2.4.js"></script>
	<script type="text/javascipt" src="placeholder.js"></script>

Make your HTML form

	<form action="" method="POST" id="userform">
		<input type="text" name="firstname" title="First Name" />
		<input type="text" name="lastname" title="Last Name" />
	</form>

Instantiate the Placeholder class for the form

	<script type="text/javascript">
	window.addEvent("domready", function()	{
		var objPlace = new PlaceHolder( "userform",	{
			focusClass : 'focus',
			blurClass : 'blur',
			positionClass : 'spanPosition' 
		});
	});
	</script>

Screenshots
-----------

![Screenshot 1](http://labs.icarusone.com/smallplace.png)



