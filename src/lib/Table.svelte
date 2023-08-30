<script lang="ts">
	import { wordData } from '../stores';
</script>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Stemmer</th>
				<th>Stem</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr>
				<td>ISRI Stemmer</td>
				<td>{$wordData.isri_stem}</td>
			</tr>
			<!-- row 2 -->
			<tr>
				<td>ARLSTem Stemmer</td>
				<td>{$wordData.arl_stem}</td>
			</tr>
			<!-- row 3 -->
			<tr>
				<td>ARLSTem2 Stemmer</td>
				<td>{$wordData.arl2_stem}</td>
			</tr>
		</tbody>
	</table>
</div>
