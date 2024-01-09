var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimitedeSubprefeitura_1 = new ol.format.GeoJSON();
var features_LimitedeSubprefeitura_1 = format_LimitedeSubprefeitura_1.readFeatures(json_LimitedeSubprefeitura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeSubprefeitura_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeSubprefeitura_1.addFeatures(features_LimitedeSubprefeitura_1);
var lyr_LimitedeSubprefeitura_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitedeSubprefeitura_1, 
                style: style_LimitedeSubprefeitura_1,
                interactive: true,
                title: '<img src="styles/legend/LimitedeSubprefeitura_1.png" /> Limite de Subprefeitura'
            });
var format_Mapadecalordealagamento_2 = new ol.format.GeoJSON();
var features_Mapadecalordealagamento_2 = format_Mapadecalordealagamento_2.readFeatures(json_Mapadecalordealagamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadecalordealagamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadecalordealagamento_2.addFeatures(features_Mapadecalordealagamento_2);
var lyr_Mapadecalordealagamento_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Mapadecalordealagamento_2, 
                radius: 6 * 2,
                gradient: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
                blur: 15,
                shadow: 250,
                title: 'Mapa de calor de alagamento'
            });
var format_Mapadecalordeinundao_3 = new ol.format.GeoJSON();
var features_Mapadecalordeinundao_3 = format_Mapadecalordeinundao_3.readFeatures(json_Mapadecalordeinundao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadecalordeinundao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadecalordeinundao_3.addFeatures(features_Mapadecalordeinundao_3);
var lyr_Mapadecalordeinundao_3 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Mapadecalordeinundao_3, 
                radius: 6 * 2,
                gradient: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
                blur: 15,
                shadow: 250,
                title: 'Mapa de calor de inundação'
            });
var format_Pontodeocorrnciadeinundao_4 = new ol.format.GeoJSON();
var features_Pontodeocorrnciadeinundao_4 = format_Pontodeocorrnciadeinundao_4.readFeatures(json_Pontodeocorrnciadeinundao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontodeocorrnciadeinundao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontodeocorrnciadeinundao_4.addFeatures(features_Pontodeocorrnciadeinundao_4);cluster_Pontodeocorrnciadeinundao_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pontodeocorrnciadeinundao_4
});
var lyr_Pontodeocorrnciadeinundao_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Pontodeocorrnciadeinundao_4, 
                style: style_Pontodeocorrnciadeinundao_4,
                interactive: true,
                title: '<img src="styles/legend/Pontodeocorrnciadeinundao_4.png" /> Ponto de ocorrência de  inundação'
            });
var format_Pontodeocorrnciadealagamento_5 = new ol.format.GeoJSON();
var features_Pontodeocorrnciadealagamento_5 = format_Pontodeocorrnciadealagamento_5.readFeatures(json_Pontodeocorrnciadealagamento_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontodeocorrnciadealagamento_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontodeocorrnciadealagamento_5.addFeatures(features_Pontodeocorrnciadealagamento_5);cluster_Pontodeocorrnciadealagamento_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pontodeocorrnciadealagamento_5
});
var lyr_Pontodeocorrnciadealagamento_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Pontodeocorrnciadealagamento_5, 
                style: style_Pontodeocorrnciadealagamento_5,
                interactive: true,
                title: '<img src="styles/legend/Pontodeocorrnciadealagamento_5.png" /> Ponto de ocorrência de alagamento'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LimitedeSubprefeitura_1.setVisible(true);lyr_Mapadecalordealagamento_2.setVisible(true);lyr_Mapadecalordeinundao_3.setVisible(true);lyr_Pontodeocorrnciadeinundao_4.setVisible(true);lyr_Pontodeocorrnciadealagamento_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LimitedeSubprefeitura_1,lyr_Mapadecalordealagamento_2,lyr_Mapadecalordeinundao_3,lyr_Pontodeocorrnciadeinundao_4,lyr_Pontodeocorrnciadealagamento_5];
lyr_LimitedeSubprefeitura_1.set('fieldAliases', {'cd_identificador_subprefeitura': 'cd_identificador_subprefeitura', 'cd_subprefeitura': 'cd_subprefeitura', 'nm_subprefeitura': 'nm_subprefeitura', 'tx_escala': 'tx_escala', 'sg_fonte_original': 'sg_fonte_original', 'dt_criacao': 'dt_criacao', 'cd_tipo_discrepancia': 'cd_tipo_discrepancia', 'dt_atualizacao': 'dt_atualizacao', 'cd_usuario_atualizacao': 'cd_usuario_atualizacao', 'sg_subprefeitura': 'sg_subprefeitura', 'qt_area_quilometro': 'qt_area_quilometro', 'qt_area_metro': 'qt_area_metro', });
lyr_Pontodeocorrnciadeinundao_4.set('fieldAliases', {'cd_identificador': 'cd_identificador', 'dt_ocorrencia': 'dt_ocorrencia', 'dc_tipo_ocorrencia': 'dc_tipo_ocorrencia', 'nm_distrito': 'nm_distrito', 'dt_carga': 'dt_carga', 'nm_subprefeitura': 'nm_subprefeitura', 'sg_fonte_original': 'sg_fonte_original', });
lyr_Pontodeocorrnciadealagamento_5.set('fieldAliases', {'cd_identificador': 'cd_identificador', 'dt_ocorrencia': 'dt_ocorrencia', 'dc_tipo_ocorrencia': 'dc_tipo_ocorrencia', 'nm_distrito': 'nm_distrito', 'dt_carga': 'dt_carga', 'nm_subprefeitura': 'nm_subprefeitura', 'sg_fonte_original': 'sg_fonte_original', });
lyr_LimitedeSubprefeitura_1.set('fieldImages', {'cd_identificador_subprefeitura': 'TextEdit', 'cd_subprefeitura': 'TextEdit', 'nm_subprefeitura': 'TextEdit', 'tx_escala': 'TextEdit', 'sg_fonte_original': 'TextEdit', 'dt_criacao': 'TextEdit', 'cd_tipo_discrepancia': 'Range', 'dt_atualizacao': 'DateTime', 'cd_usuario_atualizacao': 'TextEdit', 'sg_subprefeitura': 'TextEdit', 'qt_area_quilometro': 'TextEdit', 'qt_area_metro': 'TextEdit', });
lyr_Pontodeocorrnciadeinundao_4.set('fieldImages', {'cd_identificador': 'TextEdit', 'dt_ocorrencia': 'TextEdit', 'dc_tipo_ocorrencia': 'TextEdit', 'nm_distrito': 'TextEdit', 'dt_carga': 'TextEdit', 'nm_subprefeitura': 'TextEdit', 'sg_fonte_original': 'TextEdit', });
lyr_Pontodeocorrnciadealagamento_5.set('fieldImages', {'cd_identificador': 'TextEdit', 'dt_ocorrencia': 'TextEdit', 'dc_tipo_ocorrencia': 'TextEdit', 'nm_distrito': 'TextEdit', 'dt_carga': 'TextEdit', 'nm_subprefeitura': 'TextEdit', 'sg_fonte_original': 'TextEdit', });
lyr_LimitedeSubprefeitura_1.set('fieldLabels', {'cd_identificador_subprefeitura': 'inline label', 'cd_subprefeitura': 'no label', 'nm_subprefeitura': 'inline label', 'tx_escala': 'no label', 'sg_fonte_original': 'inline label', 'dt_criacao': 'no label', 'cd_tipo_discrepancia': 'no label', 'dt_atualizacao': 'no label', 'cd_usuario_atualizacao': 'no label', 'sg_subprefeitura': 'no label', 'qt_area_quilometro': 'inline label', 'qt_area_metro': 'no label', });
lyr_Pontodeocorrnciadeinundao_4.set('fieldLabels', {'cd_identificador': 'no label', 'dt_ocorrencia': 'inline label', 'dc_tipo_ocorrencia': 'inline label', 'nm_distrito': 'inline label', 'dt_carga': 'no label', 'nm_subprefeitura': 'inline label', 'sg_fonte_original': 'inline label', });
lyr_Pontodeocorrnciadealagamento_5.set('fieldLabels', {'cd_identificador': 'no label', 'dt_ocorrencia': 'inline label', 'dc_tipo_ocorrencia': 'inline label', 'nm_distrito': 'inline label', 'dt_carga': 'no label', 'nm_subprefeitura': 'inline label', 'sg_fonte_original': 'inline label', });
lyr_Pontodeocorrnciadealagamento_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});