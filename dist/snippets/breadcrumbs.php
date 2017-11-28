<div class="breadcrumbs">
	<ul>
		<?php foreach($site->breadcrumb() AS $crumb): ?>
			<li<?php e($crumb->isActive(), ' class="active"') ?>><a href="<?php echo $crumb->url() ?>"><?php echo $crumb->title()->html() ?></a></li>
				<?php endforeach; ?>
	</ul>
</div>
