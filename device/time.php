 <?php
$t =   round(microtime(true) * 1000);
?>
<script>
var t = ((new Date()).getTime());
document.write(<?php echo $t ?> - t);
</script>