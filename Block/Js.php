<?php
namespace SuttonSilver\InfiniteScroll\Block;

class Js extends \Magento\Framework\View\Element\Template {


    protected $_helper;

    public function __construct(\Magento\Framework\View\Element\Template\Context $context,
                                \SuttonSilver\InfiniteScroll\Helper\Config $helper,
                                array $data = [])
    {
        parent::__construct($context, $data);

        $this->_helper = $helper;

    }


    public function getHelper(){
        return $this->_helper;
    }

}