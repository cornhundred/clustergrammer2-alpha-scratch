module.exports = function draw_commands(regl, params){

    /* Matrix */
    params.cameras['mat'].draw(() => {
      // regl.clear({ color: [0, 0, 0, 0] });

      // // Filter
      // // do not overwrite the original arrs array
      // arrs_filt = filter_visible_mat(arrs, zoom_data);

      // no filtering
      arrs_filt = arrs;

      // // generate draw_cells_props using buffers is not slow
      // //////////////////////////////////////////////////////
      // var draw_cells_props = make_draw_cells_props(arrs_filt);

      regl(params.draw_cells_props.regl_props['top'])();
      regl(params.draw_cells_props.regl_props['bot'])();

    });


    /* Row labels and dendrogram */
    params.cameras['row-labels'].draw(() => {
      params.draw_labels['row']();
      params.draw_dendro['row']();
    });

    params.cameras['row-label-text'].draw(() => {
      params.draw_text_triangles(params.text_triangles);
    });

    /* Column labels and dendrogram */
    params.cameras['col-labels'].draw(() => {
      params.draw_labels['col']();
      params.draw_dendro['col']();
    });

    // Static components (later prevent from redrawing)
    params.cameras['static'].draw(() => {

      params.draw_spillover_rects.mat(params.spillover_positions['mat']);
      params.draw_spillover_rects.corners(params.spillover_positions['corners']);

    });

};