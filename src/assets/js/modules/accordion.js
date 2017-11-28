export default 

$(function () {
	$('.accordion__title').first().addClass('active');
	$('.accordion__content').hide().first().show();

	$('.accordion__title').on('click', function () {

		$(this).addClass('active').siblings('.accordion__title').removeClass('active');
		$(this).next('.accordion__content').slideDown({
			duration: 400
		}).siblings('.accordion__content').slideUp({
			duration: 400
		});
	});
});