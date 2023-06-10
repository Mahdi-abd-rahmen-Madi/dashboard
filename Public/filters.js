var Filters = {"structure": "str","category": "str","morphology": "str","type": "str","age": "str","status1983": "str"};
        function filterFunc() {
          map.eachLayer(function(lyr){
          if ("options" in lyr && "dataVar" in lyr["options"]){
            features = this[lyr["options"]["dataVar"]].features.slice(0);
            try{
              for (key in Filters){
                keyS = key.replace(/[^a-zA-Z0-9_]/g, "")
                if (Filters[key] == "str" || Filters[key] == "bool"){
                  var selection = [];
                  var options = document.getElementById("sel_" + keyS).options
                  for (var i=0; i < options.length; i++) {
                    if (options[i].selected) selection.push(options[i].value);
                  }
                    try{
                      if (key in features[0].properties){
                        for (i = features.length - 1;
                          i >= 0; --i){
                          if (selection.indexOf(
                          features[i].properties[key])<0
                          && selection.length>0) {
                          features.splice(i,1);
                          }             
                        }
                      }
                    } catch(err){
                  }
                }
                if (Filters[key] == "int"){
                  sliderVals =  document.getElementById(
                    "div_" + keyS).noUiSlider.get();
                  try{
                    if (key in features[0].properties){
                    for (i = features.length - 1; i >= 0; --i){
                      if (parseInt(features[i].properties[key])
                          < sliderVals[0]
                          || parseInt(features[i].properties[key])
                          > sliderVals[1]){
                            features.splice(i,1);
                          }
                        }
                      }
                    } catch(err){
                    }
                  }
                if (Filters[key] == "real"){
                  sliderVals =  document.getElementById(
                    "div_" + keyS).noUiSlider.get();
                  try{
                    if (key in features[0].properties){
                    for (i = features.length - 1; i >= 0; --i){
                      if (features[i].properties[key]
                          < sliderVals[0]
                          || features[i].properties[key]
                          > sliderVals[1]){
                            features.splice(i,1);
                          }
                        }
                      }
                    } catch(err){
                    }
                  }
                if (Filters[key] == "date"
                  || Filters[key] == "datetime"
                  || Filters[key] == "time"){
                  try{
                    if (key in features[0].properties){
                      HTMLkey = key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
                      startdate = document.getElementById("dat_" +
                        HTMLkey + "_date1").value.replace(" ", "T");
                      enddate = document.getElementById("dat_" +
                        HTMLkey + "_date2").value.replace(" ", "T");
                      for (i = features.length - 1; i >= 0; --i){
                        if (features[i].properties[key] < startdate
                          || features[i].properties[key] > enddate){
                          features.splice(i,1);
                        }
                      }
                    }
                  } catch(err){
                  }
                }
              }
            } catch(err){
            }
          this[lyr["options"]["layerName"]].clearLayers();
          this[lyr["options"]["layerName"]].addData(features);
          }
          })
        }
// ====================================================== Filter : Type =================================================================== 
document.getElementById("menu1").appendChild(
                document.createElement("div"));
            var div_type = document.createElement('div');
            div_type.id = "div_type";
            div_type.className= "filterselect";
            document.getElementById("menu1").appendChild(div_type);
            sel_type = document.createElement('select');
            sel_type.multiple = true;
            sel_type.size = 4;
            sel_type.id = "sel_type";
            var type_options_str;
            sel_type.onchange = function(){filterFunc()};
            type_options_str  += '<option value="antimony - arsenic">antimony - arsenic</option>';
            type_options_str  += '<option value="barite - strontianite">barite - strontianite</option>';
            type_options_str  += '<option value="copper">copper</option>';
            type_options_str  += '<option value="fluorite">fluorite</option>';
            type_options_str  += '<option value="gaz">gaz</option>';
            type_options_str  += '<option value="iron">iron</option>';
            type_options_str  += '<option value="lignite">lignite</option>';
            type_options_str  += '<option value="manganese">manganese</option>';
            type_options_str  += '<option value="mercury">mercury</option>';
            type_options_str  += '<option value="petrol">petrol</option>';
            type_options_str  += '<option value="phosphate">phosphate</option>';
            type_options_str  += '<option value="plomb - zinc">plomb - zinc</option>';
            type_options_str  += '<option value="uranium">uranium</option>';
            type_options_str  += '<option value="vanadium">vanadium</option>';
            sel_type.innerHTML = type_options_str;
            div_type.appendChild(sel_type);
            var lab_type = document.createElement('div');
            lab_type.innerHTML = 'type';
            lab_type.className = 'filterlabel';
            div_type.appendChild(lab_type);
            var reset_type = document.createElement('div');
            reset_type.innerHTML = 'clear filter';
            reset_type.className = 'filterlabel';
            reset_type.onclick = function() {
                var options = document.getElementById("sel_type").options;
                for (var i=0; i < options.length; i++) {
                    options[i].selected = false;
                }
                filterFunc();
            };
            div_type.appendChild(reset_type);
        
// ============================================ Filter : Category =========================================
            document.getElementById("menu1").appendChild(
                document.createElement("div"));
            var div_category = document.createElement('div');
            div_category.id = "div_category";
            div_category.className= "filterselect";
            document.getElementById("menu1").appendChild(div_category);
            sel_category = document.createElement('select');
            sel_category.multiple = true;
            sel_category.size = 4;
            sel_category.id = "sel_category";
            var category_options_str //= "<option value='' unselected></option>";
            sel_category.onchange = function(){filterFunc()};
            category_options_str  += '<option value="category 1">category 1</option>';
            category_options_str  += '<option value="category 2">category 2</option>';
            category_options_str  += '<option value="category 3">category 3</option>';
            category_options_str  += '<option value="index">index</option>';
            sel_category.innerHTML = category_options_str;
            div_category.appendChild(sel_category);
            var lab_category = document.createElement('div');
            lab_category.innerHTML = 'category';
            lab_category.className = 'filterlabel';
            div_category.appendChild(lab_category);
            var reset_category = document.createElement('div');
            reset_category.innerHTML = 'clear filter';
            reset_category.className = 'filterlabel';
            reset_category.onclick = function() {
                var options = document.getElementById("sel_category").options;
                for (var i=0; i < options.length; i++) {
                    options[i].selected = false;
                }
                filterFunc();
            };
            div_category.appendChild(reset_category);

// ============================================== Filter : Age =========================================================
          
  document.getElementById("menu1").appendChild(
                document.createElement("div"));
            var div_age = document.createElement('div');
            div_age.id = "div_age";
            div_age.className= "filterselect";
            document.getElementById("menu1").appendChild(div_age);
            sel_age = document.createElement('select');
            sel_age.multiple = true;
            sel_age.size = 4;
            sel_age.id = "sel_age";
            var age_options_str;
            sel_age.onchange = function(){filterFunc()};
            age_options_str  += '<option value="quaternary">quaternary</option>';
            age_options_str  += '<option value="neogene">neogene</option>';
            age_options_str  += '<option value="miocene">miocene</option>';
            age_options_str  += '<option value="eocene - oligocene">eocene - oligocene</option>';
            age_options_str  += '<option value="eocene">eocene</option>';
            age_options_str  += '<option value="cretaceous - eocene">cretaceous - eocene</option>';
            age_options_str  += '<option value="cretaceous">cretaceous</option>';
            age_options_str  += '<option value="jurassic">jurassic</option>';
            age_options_str  += '<option value="triasic">triasic</option>';
            age_options_str  += '<option value="permien">permien</option>';
            age_options_str  += '<option value="ordovician - triasic">ordovician - triasic</option>';
            age_options_str  += '<option value="ordovician">ordovician</option>';
            sel_age.innerHTML = age_options_str;
            div_age.appendChild(sel_age);
            var lab_age = document.createElement('div');
            lab_age.innerHTML = 'age';
            lab_age.className = 'filterlabel';
            div_age.appendChild(lab_age);
            var reset_age = document.createElement('div');
            reset_age.innerHTML = 'clear filter';
            reset_age.className = 'filterlabel';
            reset_age.onclick = function() {
                var options = document.getElementById("sel_age").options;
                for (var i=0; i < options.length; i++) {
                    options[i].selected = false;
                }
                filterFunc();
            };
            div_age.appendChild(reset_age);

  // ================================== Filter : Structure ============================================================
            document.getElementById("menu1").appendChild(
                document.createElement("div"));
            var div_structure = document.createElement('div');
            div_structure.id = "div_structure";
            div_structure.className= "filterselect";
            document.getElementById("menu1").appendChild(div_structure);
            sel_structure = document.createElement('select');
            sel_structure.multiple = true;
            sel_structure.size = 4;
            sel_structure.id = "sel_structure";
            var structure_options_str //= "<option value='' unselected></option>";
            sel_structure.onchange = function(){filterFunc()};
            structure_options_str  += '<option value="Miocene basin">Miocene basin</option>';
            structure_options_str  += '<option value="Mole of EL GASRIN">Mole of EL GASRIN</option>';
            structure_options_str  += '<option value="Mole of ZAGHWEN">Mole of ZAGHWEN</option>';
            structure_options_str  += '<option value="Saharan platform">Saharan platform</option>';
            structure_options_str  += '<option value="The Numidian Flysch">The Numidian Flysch</option>';
            structure_options_str  += '<option value="cretaceous - tertiary basin">cretaceous - tertiary basin</option>';
            structure_options_str  += '<option value="cristallyine basement">cristallyine basement</option>';
            structure_options_str  += '<option value="eastern platform">eastern platform</option>';
            structure_options_str  += '<option value="intracratonic basin">intracratonic basin</option>';
            sel_structure.innerHTML = structure_options_str;
            div_structure.appendChild(sel_structure);
            var lab_structure = document.createElement('div');
            lab_structure.innerHTML = 'structure';
            lab_structure.className = 'filterlabel';
            div_structure.appendChild(lab_structure);
            var reset_structure = document.createElement('div');
            reset_structure.innerHTML = 'clear filter';
            reset_structure.className = 'filterlabel';
            reset_structure.onclick = function() {
                var options = document.getElementById("sel_structure").options;
                for (var i=0; i < options.length; i++) {
                    options[i].selected = false;
                }
                filterFunc();
            };
            div_structure.appendChild(reset_structure);

// ============================================= Filter Morphology ============================================================

            document.getElementById("menu1").appendChild(
                document.createElement("div"));
            var div_morphology = document.createElement('div');
            div_morphology.id = "div_morphology";
            div_morphology.className= "filterselect";
            document.getElementById("menu1").appendChild(div_morphology);
            sel_morphology = document.createElement('select');
            sel_morphology.multiple = true;
            sel_morphology.size = 4;
            sel_morphology.id = "sel_morphology";
            var morphology_options_str;
            sel_morphology.onchange = function(){filterFunc()};
            morphology_options_str  += '<option value="Stratiform and peneconformable deposit">Stratiform and peneconformable deposit</option>';
            morphology_options_str  += '<option value="deposit in heaps and various">deposit in heaps and various</option>';
            morphology_options_str  += '<option value="petrol and gaz deposit">petrol and gaz deposit</option>';
            morphology_options_str  += '<option value="vein deposit">vein deposit</option>';
            morphology_options_str  += '<option value="unclassified">unclassified</option>';
            sel_morphology.innerHTML = morphology_options_str;
            div_morphology.appendChild(sel_morphology);
            var lab_morphology = document.createElement('div');
            lab_morphology.innerHTML = 'morphology';
            lab_morphology.className = 'filterlabel';
            div_morphology.appendChild(lab_morphology);
            var reset_morphology = document.createElement('div');
            reset_morphology.innerHTML = 'clear filter';
            reset_morphology.className = 'filterlabel';
            reset_morphology.onclick = function() {
                var options = document.getElementById("sel_morphology").options;
                for (var i=0; i < options.length; i++) {
                    options[i].selected = false;
                }
                filterFunc();
            };
            div_morphology.appendChild(reset_morphology);

          // ============================================== Filter : Status =============================================================
            document.getElementById("menu1").appendChild(
                document.createElement("div"));
            var div_status1983 = document.createElement('div');
            div_status1983.id = "div_status1983";
            div_status1983.className= "filterselect";
            document.getElementById("menu1").appendChild(div_status1983);
            sel_status1983 = document.createElement('select');
            sel_status1983.multiple = true;
            sel_status1983.size = 3;
            sel_status1983.id = "sel_status1983";
            var status1983_options_str;
            sel_status1983.onchange = function(){filterFunc()};
            status1983_options_str  += '<option value="in-operation">in-operation</option>';
            status1983_options_str  += '<option value="under-research">under-research</option>';
            status1983_options_str  += '<option value="unknown">unknown</option>';
            sel_status1983.innerHTML = status1983_options_str;
            div_status1983.appendChild(sel_status1983);
            var lab_status1983 = document.createElement('div');
            lab_status1983.innerHTML = 'status1983';
            lab_status1983.className = 'filterlabel';
            div_status1983.appendChild(lab_status1983);
            var reset_status1983 = document.createElement('div');
            reset_status1983.innerHTML = 'clear filter';
            reset_status1983.className = 'filterlabel';
            reset_status1983.onclick = function() {
                var options = document.getElementById("sel_status1983").options;
                for (var i=0; i < options.length; i++) {
                    options[i].selected = false;
                }
                filterFunc();
            };
            div_status1983.appendChild(reset_status1983);

        