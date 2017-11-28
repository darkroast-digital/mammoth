<div class="menu__trigger">
	<span></span>
	<span></span>
	<span></span>
</div>

<div class="menu">
	<div class="menu__sidebar">
		<a class="nav__brand" href="<?php echo url() ?>">
      <img src="<?php echo url('assets/img/logo-symbol.svg') ?>" alt="<?php echo $site->title()->html() ?>" draggable="false"/>
    </a>
    <p>MENU</p>
	</div>
	<div class="menu__body">
	<div class="menu__content">

		<ul class="menu__navbar">
			<?php foreach($pages->visible() as $p): ?>
				<li>
					<a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
				</li>
				<?php endforeach ?>
		</ul>

	</div>
	<div class="menu__footer">Footer</div>
	
	</div>
	
</div>
