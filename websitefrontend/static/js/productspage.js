function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getProductData(product) {
    const productData = {
        'THDP': {
            images: [
                '../static/img/lookintosection/THDP/THDP_FV.png',
                '../static/img/lookintosection/THDP/THDP_LV.png',
                '../static/img/lookintosection/THDP/THDP_RV.png',
                '../static/img/lookintosection/THDP/THDP_BV.png'
            ],
            content: [
                'Precisely controlled temperature, regulated humidity, and monitored differential pressure ensure optimal cleanroom conditions and contamination prevention.',
                '220vAC 50Hz',
                'LoRaWAN',
                '45mA',
                // '40W / 60W / 80W'
                
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                // 'Power Consumption'
            ]
        },
        'TUBE LIGHT': {
            images: [
                '../static/img/lookintosection/tube_light/tube-light-FV.png',
                '../static/img/lookintosection/tube_light/tube-light_sensor.png',
                '../static/img/lookintosection/tube_light/tube-light_RV.png',
                '../static/img/lookintosection/tube_light/tube-light_BV.png'
            ],
            content: [
                'Tube lights provide bright, even illumination for various spaces, offering energy efficiency and a sleek design suitable for both commercial and residential environments.',
               '180 Vac to 265 Vac , 50/60 Hz',
                'LoRaWAN',
                '0.2 A',
                '48 W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                'Power wattage'
            ]
        },
        'STREET LIGHT': {
            images: [
                '../static/img/lookintosection/street_light/street_light_square_FV.png',
                '../static/img/lookintosection/street_light/street_light_square_TV.png',
                '../static/img/lookintosection/street_light/street_light_square_BV.png',
                '../static/img/lookintosection/street_light/street_light_square_BACK_VIEW.png',
            ],
            content: [
                'Street lights provide reliable, wide-area illumination for roadways and public spaces, ensuring safety and visibility during nighttime and low-light conditions.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'LORA   Network with Ethernet',
                '0.2 A',
                '58 W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                'Power wattage'
            ]
        },
        'SMART PLUG': {
            images: [
                '../static/img/lookintosection/smart_plug/smart_plug_FV.png',
                '../static/img/lookintosection/smart_plug/smart_plug_LV.png',
                '../static/img/lookintosection/smart_plug/smart_plug_RV.png',
                '../static/img/lookintosection/smart_plug/smart_plug_BV.png',
            ],
            content: [
                'Smart plugs enable remote control and monitoring of electrical devices, allowing automation, energy tracking, and convenient management via smartphone apps or voice commands.',
                '220VAC',
                'Wi-Fi',
                '45mA',
                // '40W / 60W / 80W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Network Interface', 
                'Input Current', 
                // 'Power Consumption'
            ]
        },
        'SMOKE DETECTOR': {
            images: [
                '../static/img/lookintosection/smoke_detector/smoke_detector_FV.png',
                '../static/img/lookintosection/smoke_detector/smoke_detector_LV.png',
                '../static/img/lookintosection/smoke_detector/smoke_detector_RV.png',
                '../static/img/lookintosection/smoke_detector/smoke_detector_BV.png',
            ],
            content: [
                'Smart smoke detectors provide advanced fire detection with real-time alerts, connectivity to other smart devices, and enhanced accuracy to ensure timely responses and safety',
                '12v DC',
                'Wi-Fi',
                '1A',
                // '40W / 60W / 80W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Max Current', 
                // 'Power Consumption'
            ]
        },
        'OFFICE LIGHT': {
            images: [
                '../static/img/lookintosection/smart_light/cleanroom_tilted_view.png',
                '../static/img/lookintosection/smart_light/cleanroom_LV.png',
                '../static/img/lookintosection/smart_light/cleanroom_RV.png',
                '../static/img/lookintosection/smart_light/cleanroom_BV.png',
            ],
            content: [
                'Office lights offer customizable brightness, automated scheduling, and energy efficiency, enhancing productivity and reducing costs with intelligent lighting control',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ],
            titles: [
                'Voltage Range', 
                'Network Interface', 
                'Current Draw', 
                'Power Consumption'
            ]
        },
        'FLOOD LIGHT': {
            images: [
                '../static/img/lookintosection/flood_light/flood_FV.png',
                '../static/img/lookintosection/flood_light/flood_LS.png',
                '../static/img/lookintosection/flood_light/flood_RS.png',
                '../static/img/lookintosection/flood_light/flood_BV.png',
            ],
            content: [
                'Flood lights deliver intense, broad-spectrum illumination for expansive areas, enhancing visibility and security in outdoor and large-scale indoor settings.',
               '180 Vac to 265 Vac , 50/60 Hz',
                'LORA Network with Ethernet',
                '0.2 A',
                '58 W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                'Power wattage'
            ]
        },
        'MULTI CONTROL PANEL': {
            images: [
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_FV.png',
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_RV.png',
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_BV_2.png',
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_BV.png',
            ],
            content: [
                'Multi-machine controllers enable centralized management and coordination of multiple machines or systems, optimizing performance and efficiency in complex operations.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ],
            titles: [
                'Voltage Range', 
                'Network Interface', 
                'Current Draw', 
                'Power Consumption'
            ]
        },
        'HI-BAY LIGHT': {
            images: [
                '../static/img/lookintosection/hi-bay_light/high-bay-light_view.png',
                '../static/img/lookintosection/hi-bay_light/hi-bay_light_front_view.png',
                '../static/img/lookintosection/hi-bay_light/high-bay-top_view.png',
                '../static/img/lookintosection/hi-bay_light/hi-bay_light_back_view.png',
            ],
            content: [
                'High-bay lights deliver intense, wide-ranging illumination for large spaces, offering consistent brightness and energy efficiency in industrial and commercial settings.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ],
            titles: [
                'Voltage Range', 
                'Network Interface', 
                'Current Draw', 
                'Power Consumption'
            ]
        },
        'DUST SENSOR': {
            images: [
                '../static/img/lookintosection/dust_particle_monitor/DP_F (1).png',
                '../static/img/lookintosection/dust_particle_monitor/DP_B (2).png',
                '../static/img/lookintosection/dust_particle_monitor/DP_S (1).png',
                '../static/img/lookintosection/dust_particle_monitor/DP_T (2).png',
            ],
            content: [
                'Dust particle monitors detect and measure airborne particulate levels, ensuring air quality and cleanliness in sensitive environments.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Wi-Fi',
                '16 A',
                '4000 W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Max Current', 
                'Max Power'
            ]
        },
        'AIR FLOW': {
            images: [
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_FV.png',
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_RV (1).png',
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_LV (1).png',
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_BV.png',
            ],
            content: [
                'Airflow monitors track and measure air movement and velocity, ensuring proper ventilation and maintaining optimal air quality in various environments.',
                '12v DC',
                'Wi-Fi',
                '1A',
                // '40W / 60W / 80W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                // 'Power Consumption'
            ]
        },

        'SMART METER': {
            images: [
                '../static/img/lookintosection/smart-meter/1 (1).png',
                '../static/img/lookintosection/smart-meter/2 (1).png',
                '../static/img/lookintosection/smart-meter/samrt_meter_SV.png',
                '../static/img/lookintosection/smart-meter/samrt_meter_T.png',
            ],
            content: [
                'A smart meter with 4G LTE offers remote monitoring, optimized power usage, and real-time consumption reports for efficient energy management.',
                '415 Va , 3 Phase , 50/60 Hz',
                '4G LTE Cellular Network',
                '0.02A',
                '4.8 W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                'Power wattage'
            ]
        },

        'AIR WATER SHOWER': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/air water showers/1.png',
                '../static/img/lookintosection/cleanroom_automation/air water showers/2.png',
                '../static/img/lookintosection/cleanroom_automation/air water showers/3.png',
                '../static/img/lookintosection/cleanroom_automation/air water showers/1.png',
            ],
            content: [
                'Efficient decontamination units using air and water jets to remove particles before cleanroom entry, ensuring hygiene and safety',
                'Air-water jets clean surfaces.',
                'Sensors trigger operation.',
                'Clean air for drying.',
                'Adjustable settings.'
            ],
            titles: [
                'Particle Removal', 
                'Auto Activation', 
                'HEPA Air Jets', 
                'Custom Cycles'
            ]
        },

        'AIR CONDITIONING SYSTEM': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/air_conditioning_system.png',
                '../static/img/lookintosection/cleanroom_automation/air condition systems/1.png',
                '../static/img/lookintosection/cleanroom_automation/air condition systems/2.png',
                '../static/img/lookintosection/cleanroom_automation/air condition systems/3.png',
            ],
            content: [
                'Designed to maintain precise temperature, humidity, and air quality, our air conditioning systems ensure a stable and contaminant-free environment for cleanroom operations, enhancing efficiency and safety',
             'Maintains stable temperature and humidity.',
                'Optimizes air quality with HEPA filtration.',
                'Reduces energy consumption effectively.',
                'Remote control and alerts for easy monitoring.'
            ],
            titles: [
                'Precision Control',
                'HEPA Filtration',
                'Energy Efficiency',
                'Remote Monitoring'
            ]
        },

        'FUME CUPBOARD': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/Fume_Cupboard.png',
                '../static/img/lookintosection/cleanroom_automation/fume cupboard/2.png',
                '../static/img/lookintosection/cleanroom_automation/fume cupboard/3.png',
                '../static/img/lookintosection/cleanroom_automation/fume cupboard/product.full.png',
            ],
            content: [
                'Engineered for safety, our fume cupboards effectively remove hazardous fumes and vapors, providing a secure and controlled environment for cleanroom procedures.',
                'Removes toxic fumes and chemicals effectively.',
                'Sensors automate airflow control.',
                'HEPA filtration ensures clean exhaust.',
                'Offers adjustable airflow settings.'
            ],
            titles: [
                'Fume Extraction',
                'Auto Airflow Control',
                'HEPA Filtration',
                'Adjustable Settings'
            ]
        },

        'LAMINAR WORK STATION': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/Laminar_work_station.png',
                '../static/img/lookintosection/cleanroom_automation/laminar work station/4.png',
                '../static/img/lookintosection/cleanroom_automation/laminar work station/2.png',
                '../static/img/lookintosection/cleanroom_automation/laminar work station/1.png',
            ],
            content: [
                'Designed for particle-free environments, our laminar workstations provide unidirectional airflow, ensuring a sterile workspace for critical cleanroom tasks.',
                'Provides clean, particle-free airflow.',
                'HEPA filters maintain contamination control.',
                'Ensures uniform airflow across the workstation.',
                'Easy control via touch panel.'
            ],
            titles: [
                'Particle-Free Air',
                'HEPA Filtration',
                'Uniform Airflow',
                'Touch Panel Control'
            ]
        },

        'MODULAR SANDWITCH PANEL': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/modular_sandwitch_panels.png',
                '../static/img/lookintosection/cleanroom_automation/sandwitch panels/1.png',
                '../static/img/lookintosection/cleanroom_automation/sandwitch panels/3.png',
                '../static/img/lookintosection/cleanroom_automation/sandwitch panels/clean-room-doors.png',
            ],
            content: [
                'Durable, insulated panels offering superior thermal control and seamless integration, ideal for creating efficient and sterile cleanroom environments.',
                'Insulated panels ensure temperature control.',
                'Quick assembly with modular design.',
                'Durable and easy to clean surfaces.',
                'Compliant with cleanroom standards.'
            ],
            titles: [
                'Temperature Control',
                'Modular Design',
                'Easy Maintenance',
                'Standards Compliance'
            ]
        },

        'NITROGEN STORAGE CABINET': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/nitrogen_storage_cabinate.png',
                '../static/img/lookintosection/cleanroom_automation/nitrogen storage cabinet/1.png',
                '../static/img/lookintosection/cleanroom_automation/nitrogen storage cabinet/2.png',
                '../static/img/lookintosection/cleanroom_automation/nitrogen storage cabinet/3.png',
            ],
            content: [
                'Provides an inert, controlled environment to safely store sensitive materials, preventing oxidation and contamination in cleanroom settings.',
                'Stores sensitive items under nitrogen atmosphere.',
                'Prevents oxidation and moisture exposure.',
                'Automated nitrogen purging system.',
                'Monitors internal environment in real-time.'
            ],
            titles: [
                'Controlled Storage',
                'Oxidation Prevention',
                'Automated Purging',
                'Real-Time Monitoring'
            ]
        },

        
        'PASS BOX': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/Pass_box.png',
                '../static/img/lookintosection/cleanroom_automation/pass box/1.png',
                '../static/img/lookintosection/cleanroom_automation/pass box/2.png',
                '../static/img/lookintosection/cleanroom_automation/pass box/3.png',
            ],
            content: [
                'Facilitates safe and contamination-free transfer of materials between cleanroom areas, ensuring minimal disruption to the controlled environment.',
                'Facilitates material transfer between cleanrooms.',
                'Interlocking doors prevent cross-contamination.',
                'Equipped with UV sterilization.',
                'Customizable sizes and configurations.'
            ],
            titles: [
                'Material Transfer',
                'Interlocking System',
                'UV Sterilization',
                'Customizable Design'
            ]
        },


        
        'SAMPLING BOOTH': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/sampling-booth.png',
                '../static/img/lookintosection/cleanroom_automation/sampling booth/1.png',
                '../static/img/lookintosection/cleanroom_automation/sampling booth/2.png',
                '../static/img/lookintosection/cleanroom_automation/sampling booth/3.png',
            ],
            content: [
                'Ensures a controlled, contamination-free environment for safe and accurate material sampling in cleanroom operations.',
            'Ensures contamination-free sampling.',
                'HEPA filters provide clean airflow.',
                'Designed with ergonomic workspace.',
                'Compliant with industry standards.'
            ],
            titles: [
                'Contamination-Free Sampling',
                'HEPA Airflow',
                'Ergonomic Design',
                'Standards Compliance'
            ]
        },
 

     

        'CONTROL PANEL': {
            images: [
                '../static/img/lookintosection/control_panal/control_panal_fv.png',
                '../static/img/lookintosection/control_panal/control_panal_lv.png',
                '../static/img/lookintosection/control_panal/control_panal_rv.png',
                '../static/img/lookintosection/control_panal/control_panal_bv.png',
            ],
            content: [
                'Control panels provide centralized management and monitoring of various systems, offering intuitive interfaces for operating, configuring, and controlling equipment and processes.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'LoRaWAN',
                '0.2 A',
                '48 W'
            ],
            titles: [
                'Input Supply Voltage', 
                'Connectivity', 
                'Input Current', 
                'Power wattage'
            ]
        }
    };
    return productData[product] || {};
}

window.onload = function () {
    const product = getQueryParam('product');
    
    if (product) {
        document.getElementById('product_img_title').innerText = product.replace(' ', ' ');

        const data = getProductData(product);
        const images = data.images || [];
        const content = data.content || [];
        const titles = data.titles || []; // New: Titles data

        const mainImageContainer = document.getElementById('product_main_img_big');
        const productImagesContainer = document.getElementById('products_images_small');

        // Update the main product image and thumbnails
        if (images.length > 0) {
            mainImageContainer.src = images[0];

            images.slice(1).forEach(src => {
                const product_changing_functionalities = document.createElement('div');
                product_changing_functionalities.className = 'small-box';

                const imgElement = document.createElement('img');
                imgElement.src = src;

                imgElement.addEventListener('click', function () {
                    const tempSrc = mainImageContainer.src;
                    mainImageContainer.src = this.src;
                    this.src = tempSrc;
                });

                product_changing_functionalities.appendChild(imgElement);
                productImagesContainer.appendChild(product_changing_functionalities);
            });
        }

        // Add the content divs based on the product
        const contentDivIds = [
            'product_img_description', 
            'product_img_input_voltage_spec', 
            'product_img_network', 
            'product_img_input_current', 
            'product_img_power_wattage'
        ];

        contentDivIds.forEach((id, index) => {
            const div = document.getElementById(id);
            if (div && content[index]) {
                div.innerText = content[index];
            }
        });

        // Update the feature titles dynamically
        const titleIds = [
            'title_input_voltage', 
            'title_network', 
            'title_input_current', 
            'title_power_wattage'
        ];

        titleIds.forEach((id, index) => {
            const titleElement = document.getElementById(id);
            if (titleElement && titles[index]) {
                titleElement.innerText = titles[index];
            }
        });
    }
};
