<?php
/**
 * Plugin Name:       chatpdf-bot
 * Description:       Chatbot Block using ChadPDF API. You need to configure PDF in the settings page 
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ashhad Memon
 * Text Domain:       chatpdf-bot
 *
 * @package           chatpdf-bot
 */

function create_block_chatpdf_bot_block_init() {

	register_block_type(
		plugin_dir_path( __FILE__ ) . 'build',
		array(
			'render_callback' => 'create_block_chatpdf_bot_render_callback',
		)
	);
}
add_action( 'init', 'create_block_chatpdf_bot_block_init' );

function create_block_chatpdf_bot_render_callback( $atts, $content, $block) {
    wp_enqueue_script('create-block-chatpdf-bot-view-script');
    echo '<p ' . get_block_wrapper_attributes() . ' id="app"></p>';
}

function chatpdf_chatbot_add_menu_item() {
    add_options_page(
        'ChatPDF Chatbot Settings',  // Page title
        'ChatPDF Chatbot',           // Menu title
        'manage_options',            // Capability required
        'chatpdf-chatbot-settings',  // Menu slug
        'chatpdf_chatbot_render_settings_page' // Callback function to render the settings page
    );
}
add_action('admin_menu', 'chatpdf_chatbot_add_menu_item');

function enqueue_plugin_styles() {
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'enqueue_plugin_styles');

// Register plugin settings
function chatpdf_chatbot_register_settings() {
    register_setting('chatpdf-chatbot-settings-group', 'chatpdf_chatbot_api_key');
    register_setting('chatpdf-chatbot-settings-group', 'chatpdf_chatbot_secret_key');
}
add_action('admin_init', 'chatpdf_chatbot_register_settings');

// Render the settings page
function chatpdf_chatbot_render_settings_page() {
    ?>
    <div class="wrap">
        <h1>ChatPDF Chatbot Settings</h1>
		<p>Go to chatpdf.com, on the account bring used. Upload your PDF, copy and paste the last part of the URL into the Input field below, then hit the save button.</p>
		<img src="<?php echo plugin_dir_url(__FILE__) . 'src/tutorial.png'; ?>" alt="Tutorial" width="626px" height="170px"/>
		<p>Paste in the API Key as well. At the bottom of the page, click on 'account'. Copy the Personaly API Key and paste that here too.</p>
        <img src="<?php echo plugin_dir_url(__FILE__) . 'src/tutorial2.png'; ?>" alt="Tutorial2" width="626px" height="497px"/>
        <form method="post" action="options.php">
            <?php settings_fields('chatpdf-chatbot-settings-group'); ?>
            <?php do_settings_sections('chatpdf-chatbot-settings-group'); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">PDF URL:</th>
                    <td><input type="text" name="chatpdf_chatbot_api_key" value="<?php echo esc_attr(get_option('chatpdf_chatbot_api_key')); ?>" /></td>
                    <th scope="row">API Key:</th>
                    <td><input type="text" name="chatpdf_chatbot_secret_key" value="<?php echo esc_attr(get_option('chatpdf_chatbot_secret_key')); ?>" /></td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

// Define the function to add settings link
function chatpdf_bot_settings_link($links) {
    $settings_link = '<a href="' . admin_url('options-general.php?page=chatpdf-chatbot-settings') . '">Settings</a>';
    array_unshift($links, $settings_link);
    return $links;
}

// Hook the function to the plugin_action_links filter
add_filter('plugin_action_links_chatpdf-bot/chatpdf-bot.php', 'chatpdf_bot_settings_link');


function enqueue_chatbot_view_script() {
    // Get the API key from options
    $api_key = get_option('chatpdf_chatbot_api_key');

    // Pass the API key to the script
    wp_enqueue_script(
        'chatbot-view-script',
        plugin_dir_url(__FILE__),
        array('jquery'), // Include any dependencies here
        '1.0.0',
        true
    );

    // Localize the script to pass PHP data to JavaScript
    wp_localize_script(
        'chatbot-view-script',
        'chatpdf_chatbot_settings',
        array(
            'api_key' => $api_key
        )
    );
}

add_action('wp_enqueue_scripts', 'enqueue_chatbot_view_script');

require_once( dirname( __FILE__ ) . '/src/api.php' );